import express, { Express } from "express";
import cors from "cors";
import logger from "morgan";
import compression from "compression";
import helmet from "helmet";

// fix __dirname error
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// TODO: import routes
import indexRouter from "./routes/index";
import oauthRouter from "./routes/oauth";
import tracksRouter from "./routes/tracks";

// Creating Express application.
const app: Express = express();

// Middleware (goes first than routes).
app.use(logger("dev"));
app.use(cors()); // enable All CORS Requests
app.use(express.json()); // for parsing application/json (body-parser)
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(compression()); // 3rd party plugin: compresses all the responses
app.use(helmet()); // 3rd party plugin: secure your Express apps by setting various HTTP headers

// TODO: Define routes
app.use("/", indexRouter);
app.use("/login", oauthRouter);
app.use("/tracks", tracksRouter);
// app.use("/users", usersRouter);
// app.use("/links", linksRouter);

// Static files.
app.use("/static", express.static(path.join(__dirname, "public")));

export { app };
