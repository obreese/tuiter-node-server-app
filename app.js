// // pre es6 syntax (equiv to import express from express)
// in package.json, type would be commonjs instead of module
// const express = require("express");

import express from "express";
import cors from "cors";
import HelloController from "./controllers/hello-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import UserController from "./controllers/users/users-controller.js";
import mongoose from "mongoose";

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING || "mongodb://localhost:27017/tuiter"
);

// create instance of express
const app = express();

app.use(express.json());
app.use(cors());

HelloController(app);
UserController(app);
TuitsController(app);

// liten on port 4000 (common for starting local server, though default for http is 80)
app.listen(process.env.PORT || 4000);
