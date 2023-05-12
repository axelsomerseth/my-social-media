import { Router } from "express";
import { healthCheck } from "../handlers/health";

const healthRouter = Router();

healthRouter.get("/", healthCheck);

export default healthRouter;
