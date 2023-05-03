import axios from "axios";

async function authorize() {
  const clientId = process.env.SPOTIFY_CLIENT_ID as string;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET as string;
  const base64String: Buffer = Buffer.from(clientId + ":" + clientSecret);

  try {
    const response = await axios.request({
      url: "https://accounts.spotify.com/api/token",
      method: "post",
      headers: {
        Authorization: "Basic " + base64String.toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        grant_type: "client_credentials",
      },
    });

    const body = response.data;

    return { accessToken: body.access_token };
  } catch (error) {
    throw error;
  }
}

async function getRecommendations(seedArtists: string) {
  try {
    const { accessToken } = await authorize();
    const response = await axios.request({
      url: `https://api.spotify.com/v1/recommendations?limit=5&seed_artists=${seedArtists}`,
      method: "get",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
    return { tracks: response.data.tracks, seeds: response.data.seeds };
  } catch (error) {
    throw error;
  }
}

export { authorize, getRecommendations };
