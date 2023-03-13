const CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;

const getAccessToken = async (authorizationCode) => {
  const url = `${BACKEND_BASE_URL}/login/github/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${authorizationCode}`;
  const response = await fetch(url, {
    method: "POST",
  });

  const body = await response.json();

  return body;
};

const getGithubUser = async (oauthAccessToken) => {
  const response = await fetch("https://api.github.com/user", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${oauthAccessToken}`,
    },
  });

  const body = await response.json();

  if (response.status === 200) {
    return body;
  } else {
    return null;
  }
};

export { getAccessToken, getGithubUser };
