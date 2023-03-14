import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

const FacebookLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleFBLogin = () => {
    window.FB.login(
      function (response) {
        // handle the response
        if (response.status === "connected") {
          // Logged into your webpage and Facebook.
          window.FB.api(
            "/me",
            {
              fields:
                "id,name,birthday,email,gender,hometown,location,about,picture,link",
            },
            function (response) {
              setUser({
                ...response,
                identityProvider: "Facebook",
              });
            }
          );
          navigate("/");
        } else {
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

  useEffect(() => {
    window.FB.getLoginStatus(function (response) {
      if (response.status === "connected") {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <>Logged in with Facebook</>
      ) : (
        <Button variant="secondary" onClick={handleFBLogin}>
          Login with Facebook
        </Button>
      )}
    </>
  );
};

export default FacebookLogin;
