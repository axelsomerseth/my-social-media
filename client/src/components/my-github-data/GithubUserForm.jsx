import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const GithubUserForm = () => {
  const [githubUsername, setGithubUsername] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(githubUsername);
  };

  return (
    <>
      <Form className="w-100">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col md={5}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your GitHub username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your GitHub username"
                  value={githubUsername}
                  onChange={(event) => setGithubUsername(event.target.value)}
                />
                <Form.Text className="text-muted">
                  We will use your info to create a card.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md={2} className="d-flex justify-content-center">
              <Button variant="primary" type="submit" onClick={onSubmit}>
                Submit
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default GithubUserForm;
