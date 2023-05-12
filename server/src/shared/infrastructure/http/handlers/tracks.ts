import { RequestHandler, Request, Response } from "express";
import { getRecommendations } from "../../../providers/music/spotify";

const listRecommendations: RequestHandler = async (
  req: Request,
  res: Response
) => {
  req;
  const seedArtists = process.env.SPOTIFY_SEED_ARTISTS as string;
  const recommendations = await getRecommendations(seedArtists);
  res.status(200).json({ ...recommendations });
};

export { listRecommendations };
