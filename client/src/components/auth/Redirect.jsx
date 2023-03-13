import React, { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getAccessToken, getGithubUser } from "../../services/OAuth/GitHub";
import { UserContext } from "../../index";

const Redirect = () => {
  const { setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const authorizationCode = searchParams.get("code") || "";

  useEffect(() => {
    setIsLoading(true);
    getAccessToken(authorizationCode)
      .then((data) => {
        getGithubUser(data.access_token)
          .then((githubUser) => {
            console.log(githubUser);
            setUser(githubUser);
            setIsLoading(false);
            navigate("/my-github-data");
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container className="mt-5 mb-5">
        <Row>
          <Col className="d-flex justify-content-center">
            {isLoading && <Spinner animation="border" variant="primary" />}
          </Col>
        </Row>
        <Row className="mt-3 mb-3">
          <Col className="d-flex justify-content-center">
            {isLoading && (
              <Alert variant={"primary"}>
                <Alert.Heading>
                  Loading your GitHub profile data...
                </Alert.Heading>
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Redirect;
