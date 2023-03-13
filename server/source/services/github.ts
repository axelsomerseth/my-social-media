import fetch from "node-fetch";

const getAccessToken = async (
  clientId: string,
  clientSecret: string,
  authorizationCode: string
) => {
  const url = `https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${authorizationCode}`;
  const response = await fetch(url, {
    method: "post",
    headers: { Accept: "application/json" },
  });

  const data = await response.json();

  return data;
};

export { getAccessToken };
