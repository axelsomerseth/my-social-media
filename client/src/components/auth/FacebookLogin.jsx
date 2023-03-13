import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import { UserContext } from "../../App";

const FacebookLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { setUser } = useContext(UserContext);

  const handleFBLogin = () => {
    window.FB.login(
      function (response) {
        // handle the response
        console.log(response);
        if (response.status === "connected") {
          // Logged into your webpage and Facebook.
        } else {
          // The person is not logged into your webpage or we are unable to tell.
        }
      },
      {
        scope:
          "public_profile,email,user_birthday,user_hometown,user_location,user_likes,user_gender,user_link",
      }
    );
    window.FB.api(
      "/me",
      { fields: "id,name,email,picture" },
      function (response) {
        console.log(response);
        setUser({
          ...response,
          identityProvider: "Facebook",
        });
      }
    );
  };

  useEffect(() => {
    window.FB.getLoginStatus(function (response) {
      console.log(response);
      if (response.status === "connected") {
        setIsLoggedIn(true);
      } else if (response.status === "not_authorized") {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(false);
      }
    });
    // window.FB.logout(function (response) {
    //   console.log(response);
    //   // Person is now logged out
    // });
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
