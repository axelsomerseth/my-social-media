import { RequestHandler, Request, Response } from "express";

const healthCheck: RequestHandler = (req: Request, res: Response) => {
  req;
  res.sendStatus(200);
};

export { healthCheck };
