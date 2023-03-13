import express, { Router } from "express";
import { getGithubAccessToken } from "../handlers/oauth";

const router: Router = express.Router();

router.post("/github/oauth/access_token", getGithubAccessToken);

router.post("/sign-in", () => {});

router.get("/sign-out", () => {});

// router.get("/my-account", authenticateMiddleware, myAccount);

export default router;
