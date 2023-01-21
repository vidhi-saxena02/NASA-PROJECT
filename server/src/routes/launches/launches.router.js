const express = require("express");
const {
  httpgetAllLaunches,
  httpAddNewLaunches,
  httpAbortLaunch,
} = require("./launches.controller");

const launchesRouter = express.Router();

launchesRouter.get("/", httpgetAllLaunches);
launchesRouter.post("/", httpAddNewLaunches);
launchesRouter.delete("/:id", httpAbortLaunch);
module.exports = launchesRouter;
