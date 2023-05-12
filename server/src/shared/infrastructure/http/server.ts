#!/usr/bin/env node

// ! This file is the server entrypoint

import * as dotenv from "dotenv";
dotenv.config();

import express, { Express } from "express";
import cors from "cors";
import logger from "morgan";
import compression from "compression";
import helmet from "helmet";
import routes from "./routes";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // fix __dirname error

const app: Express = express();

// Middlewares (goes first than routes).
app.use(logger("dev"));
app.use(cors()); // enable All CORS Requests
app.use(express.json()); // for parsing application/json (body-parser)
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(compression()); // 3rd party plugin: compresses all the responses
app.use(helmet()); // 3rd party plugin: secure your Express apps by setting various HTTP headers

const port = process.env.PORT || 5000;
app.set("port", port);

// Static files.
app.use("/static", express.static(path.join(__dirname, "public")));

// Routes
app.use(routes);

// Run server
app.listen(port, () => {
  console.log(`✅ - Server is listening to ${port}`);
});
