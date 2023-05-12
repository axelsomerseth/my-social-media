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

  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(`GitHub OAuth exception. Status: ${response.status}`);
  }
};

export { getAccessToken };
