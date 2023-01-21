//router is another type of middleware that groups together related routes

const express = require("express");
const { httpgetAllPlanets } = require("../planets/planets.controllers");

const planetsRouter = express.Router();

planetsRouter.get("/", httpgetAllPlanets);

module.exports = planetsRouter;
