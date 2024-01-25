import express from "express";
const app = express();
const port = 8443; // Use a port above 1024 to avoid requiring root privileges
import config from "./config.js";
import mcache from "memory-cache";
import cors from "cors";
import axios from "axios";

//<----Middleware Start---->

app.listen(port, () => {
  console.log(`Server listening at https://localhost:${port}`);
});

app.use(cors());

//Cache logic -- API Calls held for 1 hour in cache

function cache(duration) {
  return (req, res, next) => {
    let key = "__express__" + (req.originalUrl || req.url);
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


app.get("/api/forecast", cache(3600), (req, res) => {
  console.log("Querying forecast data...");
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
});

app.get("/api/places", cache(3600), (req, res) => {
  console.log("Querying places data...");
  fetch(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${config.googleMapsApiKey}&input=${req.query.input}&types=(cities)`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((error) => {
      console.error("Error:", error);
    });
});

//<----API Calls End---->

