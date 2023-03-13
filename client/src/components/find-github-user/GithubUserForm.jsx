import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const GithubUserForm = ({ setGithubUsername, fetchGithubUser }) => {
  const [input, setInput] = useState("");

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setGithubUsername(input);
    fetchGithubUser();
  };

  const resetForm = (event) => {
    event.preventDefault();
    setInput("");
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
                  value={input}
                  onChange={onInputChange}
                />
                <Form.Text className="text-muted">
                  We will use your info to show a card below.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md={1} className="d-flex justify-content-center">
              <Button variant="primary" type="submit" onClick={onSubmit}>
                Submit
              </Button>
            </Col>
            <Col md={1} className="d-flex justify-content-center">
              <Button variant="secondary" type="submit" onClick={resetForm}>
                Reset
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default GithubUserForm;
