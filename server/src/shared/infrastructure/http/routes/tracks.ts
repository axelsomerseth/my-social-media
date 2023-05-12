import { Router } from "express";
import { listRecommendations } from "../handlers/tracks";

const tracksRouter: Router = Router();

tracksRouter.get("/", listRecommendations);

export default tracksRouter;
