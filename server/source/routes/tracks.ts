import express, { Router } from "express";
import { listRecommendations } from "../handlers/tracks";

const router: Router = express.Router();

router.get("/", listRecommendations);

export default router;
