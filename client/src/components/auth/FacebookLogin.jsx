import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import {
  getFacebookLoginStatus,
  handleFacebookLogin,
} from "../../shared/providers/oauth/facebook";

const FacebookLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleFBLogin = () => {
    handleFacebookLogin(setUser);
    navigate("/");
  };

  useEffect(() => {
    getFacebookLoginStatus(setIsLoggedIn);
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <p>Logged in with Facebook</p>
      ) : (
        <Button variant="secondary" onClick={handleFBLogin}>
          Login with Facebook
        </Button>
      )}
    </>
  );
};

export default FacebookLogin;
