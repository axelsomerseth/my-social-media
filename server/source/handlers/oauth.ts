import { RequestHandler, Request, Response } from "express";
import { getAccessToken } from "../services/github";

interface AccessToken {
  access_token?: string;
  token_type?: string;
  scope?: string;
}

const getGithubAccessToken: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { client_id, client_secret, code } = req.query;
  const clientId = client_id as string;
  const clientSecret = client_secret as string;
  const authorizationCode = code as string;

  const data = (await getAccessToken(
    clientId as string,
    clientSecret,
    authorizationCode
  )) as AccessToken;

  res.status(200);
  res.json({
    access_token: data?.access_token,
    token_type: data?.token_type,
    scope: data?.token_type,
  });
};

export { getGithubAccessToken };
