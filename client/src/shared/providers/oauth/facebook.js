const handleFacebookLogin = (setUser) => {
  window.FB.login(
    (response) => {
      // handle the response
      if (response.status === "connected") {
        // Logged into your webpage and Facebook.
        window.FB.api(
          "/me",
          {
            fields:
              "id,name,birthday,email,gender,hometown,location,about,picture,link",
          },
          (response) => {
            const user = {
              ...response,
              identityProvider: "Facebook",
            };
            setUser(user);
          }
        );
      } else {
        setUser(null);
        // The person is not logged into your webpage or we are unable to tell.
        console.error("Unable to login with Facebook.");
      }
    },
    {
      scope:
        "public_profile,email,user_birthday,user_hometown,user_location,user_likes,user_gender,user_link",
    }
  );
};

const handleFacebookLogout = () => {
  window.FB.getLoginStatus((response) => {
    if (response.status === "connected") {
      window.FB.logout();
    }
  });
};

const getFacebookProfileData = (setUser) => {
  window.FB.getLoginStatus((response) => {
    if (response.status === "connected") {
      window.FB.api(
        "/me",
        {
          fields:
            "id,name,birthday,email,gender,hometown,location,about,picture,link",
        },
        (response) => {
          const user = {
            ...response,
            identityProvider: "Facebook",
          };
          setUser(user);
        }
      );
    } else {
      setUser(null);
    }
  });
};

const getFacebookLoginStatus = (setIsLoggedIn) => {
  window.FB.getLoginStatus((response) => {
    if (response.status === "connected") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });
};

export {
  handleFacebookLogin,
  handleFacebookLogout,
  getFacebookProfileData,
  getFacebookLoginStatus,
};
