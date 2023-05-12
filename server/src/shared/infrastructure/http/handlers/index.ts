import { RequestHandler, Request, Response } from "express";

const indexHandler: RequestHandler = (req: Request, res: Response) => {
  req;
  res.send(`Welcome to My Social Media server!`);
};

export { indexHandler };
