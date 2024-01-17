import express from "express";
const app = express();
const port = 3000;
import config from "./config.js";
const apiKey = config.weatherApiKey;
const gitHubToken = config.gitHubToken;
import mcache from "memory-cache";
import cors from "cors";
import path from "path";

//<----Middleware Start---->

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use(cors());

//Cache logic -- API Calls held for 1 day in cache

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

const getCurrentDirectory = () => {
  const currentModulePath = new URL(import.meta.url).pathname;
  const currentDirectory = path.dirname(currentModulePath);
  return currentDirectory;
};

//serve images
app.use('/images', express.static('public/images'));

//<----Middleware End---->

//<----API Calls Start---->

app.get("/api/realtime", cache(3600), (req, res) => {
  console.log("Querying realtime data...");
  fetch(
    "https://api.tomorrow.io/v4/weather/realtime?location=frisco&apikey=" +
      apiKey,
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
      apiKey,
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

app.get("/api/gitCommits", cache(3600), (req, res) => {
  console.log("Querying GitHub data...");
  fetch("https://api.github.com/repos/ep3824/portfolio-dash-3/commits", {
    method: "GET",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${gitHubToken}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  })
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((error) => {
      console.error("Error:", error);
    });
});


//<----API Calls End---->

//Project Page
app.get("/dashboard-page", (req, res) => {
  const currentDirectory = getCurrentDirectory();
  // Serve the HTML file for the new page
  res.sendFile(path.join(currentDirectory, "dashboard-page.html"));
});
