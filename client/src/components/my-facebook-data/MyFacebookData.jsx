import React, { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Alert from "react-bootstrap/Alert";
import { UserContext } from "../../App";

const MyFacebookData = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);

  useEffect(() => {
    window.FB.getLoginStatus(function (response) {
      console.log(response);
    });
    window.FB.api(
      "/me",
      {
        fields:
          "id,name,birthday,email,gender,hometown,location,about,picture,link",
      },
      function (response) {
        console.log(response);
        setUser({
          ...response,
          identityProvider: "Facebook",
        });
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          {user ? (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={user.picture?.data?.url} />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {user.email}
                </Card.Subtitle>
                <Card.Text>{user.bio}</Card.Text>
                <ListGroup className="mb-3">
                  <ListGroup.Item>Birthday: {user.birthday}</ListGroup.Item>
                  <ListGroup.Item>
                    Hometown: {user.hometown?.name}
                  </ListGroup.Item>
                </ListGroup>
                <a
                  className="btn btn-primary"
                  href={user.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View profile on Facebook
                </a>
              </Card.Body>
            </Card>
          ) : (
            <Alert variant={"danger"}>
              <Alert.Heading>Error</Alert.Heading>
              No user found.
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MyFacebookData;
