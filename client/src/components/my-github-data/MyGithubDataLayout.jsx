import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Alert from "react-bootstrap/Alert";
import { UserContext } from "../../index";

const MyGithubDataLayout = () => {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          {user ? (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={user.avatar_url} />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {"@" + user.login}
                </Card.Subtitle>
                <Card.Text>{user.bio}</Card.Text>
                <ListGroup className="mb-3">
                  <ListGroup.Item>Followers: {user.followers}</ListGroup.Item>
                  <ListGroup.Item>Following: {user.following}</ListGroup.Item>
                  <ListGroup.Item>
                    Public Repos: {user.public_repos}
                  </ListGroup.Item>
                </ListGroup>
                <a
                  className="btn btn-success"
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View profile on GitHub
                </a>
                <p></p>
                <a
                  className="btn btn-secondary"
                  href={user.blog}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Website
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

export default MyGithubDataLayout;
