import { Router } from "express";
import { indexHandler } from "../handlers";
import healthRouter from "./health";
import tracksRouter from "./tracks";
import oauthRouter from "./oauth";

const routes = Router();

// TODO: Define routers here.
routes.get("/", indexHandler); // default route
routes.use("/health", healthRouter);
routes.use("/tracks", tracksRouter);
routes.use("/oauth", oauthRouter);
// routes.use("/users", usersRouter);
// routes.use("/links", linksRouter);

export default routes;
