import { Router } from "express";
import { getGithubAccessToken } from "../handlers/oauth";

const oauthRouter: Router = Router();

oauthRouter.post("/github/access_token", getGithubAccessToken);

export default oauthRouter;
