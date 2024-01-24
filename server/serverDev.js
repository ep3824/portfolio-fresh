import express from "express";
const app = express();
const port = 8443; // Use a port above 1024 to avoid requiring root privileges
import config from "./config.js";
import mcache from "memory-cache";
import cors from "cors";
import https from "https";
import fs from "fs";
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

// const getCurrentDirectory = () => {
//   const currentModulePath = new URL(import.meta.url).pathname;
//   const currentDirectory = path.dirname(currentModulePath);
//   return currentDirectory;
// };

//serve images
// not sure if I should serve these from the server or not?
// if im using s3 maybe just let s3 serve the images....
// app.use('/images', express.static('public/images'));

//<----Middleware End---->

//<----API Calls Start---->

app.get("/api/realtime", cache(3600), (req, res) => {
  console.log("Querying realtime data...");
  fetch(
    "https://api.tomorrow.io/v4/weather/realtime?location=frisco&apikey=" +
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

app.get("/api/forecast", cache(3600), (req, res) => {
  console.log("Querying forecast data...");
  fetch(
    "https://api.tomorrow.io/v4/weather/forecast?location=frisco&apikey=" +
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

app.get("/api/places", async (req, res) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${config.googleMapsApiKey}&input=${req.query.input}`
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//<----API Calls End---->

//Project Page
// app.get("/dashboard-page", (req, res) => {
//   const currentDirectory = getCurrentDirectory();
//   // Serve the HTML file for the new page
//   res.sendFile(path.join(currentDirectory, "dashboard-page.html"));
// });

//Getting rid of this call, this should be handled by the frontend
