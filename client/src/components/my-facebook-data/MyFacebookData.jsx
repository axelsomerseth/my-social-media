import React, { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import { UserContext } from "../../App";
import { getFacebookProfileData } from "../../shared/providers/oauth/facebook";

const MyFacebookData = () => {
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFacebookProfileData(setUser);
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <Spinner animation="border" variant="dark" />
          </Col>
        </Row>
      </Container>
    );
  }

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
