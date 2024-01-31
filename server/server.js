import express from "express";
const app = express();
const port = 8443; // Use a port above 1024 to avoid requiring root privileges
import config from "./config.js";
import mcache from "memory-cache";
import cors from "cors";
import https from "https";
import fs from "fs";
import { query, validationResult } from "express-validator";
import validator from "validator";
import cookieParser from "cookie-parser";
import csrf from "csurf";

//<----Middleware Start---->
app.use(cors())
app.disable("x-powered-by");

function securePassword() {
  var suffix = window.crypto.getRandomValues(new Uint32Array(1))[0];
  var password = config.cookiePassword + suffix;
  return password;
}

app.use(
  cookieParser(securePassword().toString(), {
    sameSite: "strict",
  })
);
const csrfProtection = csrf({ cookie: true })
app.use(csrfProtection);

const privateKey = fs.readFileSync("./private.key", "utf8");
const certificate = fs.readFileSync("./certificate.pem", "utf8");
const credentials = { key: privateKey, cert: certificate };
const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
  console.log(`Server listening at https://localhost:${port}`);
});

app.get('/getCSRFToken', (req, res) => {
  res.json({ CSRFToken: req.CSRFToken() });
});

//Cache logic -- API Calls held for 1 hour in cache

function cache(duration) {
  return (req, res, next) => {
    let key = validator.escape(("__express__" + (req.originalUrl || req.url)));
    let cachedBody = mcache.get(key);
    if (cachedBody) {
      res.send(cachedBody);
      return;
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };
      next();
    }
  };
}

//<----Middleware End---->

//<----API Calls Start---->

app.get(
  "/api/forecast",
  cache(3600),
  query("city").notEmpty().escape(),
  (req, res) => {
    console.log("Querying forecast data...");
    const result = validationResult(req);
    if (result.isEmpty()) {
      fetch(
        `https://api.tomorrow.io/v4/weather/forecast?location=${req.query.city}&apikey=` +
          config.weatherApiKey,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => res.json(data))
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    if (!result.isEmpty()) {
      res.send({ errors: result.array() });
    }
  }
);

app.get(
  "/api/places",
  cache(3600),
  query("input").notEmpty().escape(),
  (req, res) => {
    console.log("Querying places data...");
    const result = validationResult(req);
    if (result.isEmpty()) {
    fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${config.googleMapsApiKey}&input=${req.query.input}&types=(cities)&components=country:us`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => res.json(data))
      .catch((error) => {
        console.error("Error:", error);
      });
    }
    if (!result.isEmpty()) {
      res.send({ errors: result.array() });
    }
  }
);

//<----API Calls End---->
