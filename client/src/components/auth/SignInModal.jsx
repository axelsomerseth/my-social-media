import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FacebookLogin from "./FacebookLogin";

const GITHUB_CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
const GITHUB_REDIRECT_URI = process.env.REACT_APP_GITHUB_REDIRECT_URI;

const SignInModal = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleExit = () => navigate("/", { replace: true });
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("TODO: Log in");
    console.log(`Username: ${username}, Password: ${password}`);
    // TODO: log in and close modal on success and show the error on error
    navigate("/");
  };

  useEffect(() => {
    handleShow();
    return function cleanup() {
      handleClose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal show={show} onHide={handleClose} onExited={handleExit}>
      <Modal.Header closeButton>
        <Modal.Title>Sign in to your account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <Form id="signInForm">
                <Form.Group className="mb-3" controlId="signInUsername">
                  <Form.Label>Username (Email address)</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="signInPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="signInCheckbox"> */}
                {/* <Form.Check type="checkbox" label="Remember me" /> */}
                {/* </Form.Group> */}
              </Form>
            </Col>
          </Row>
          <hr />
          <Row className="mb-2">
            <Col className="d-flex justify-content-center">
              <a
                className="btn btn-secondary"
                href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${GITHUB_REDIRECT_URI}`}
              >
                Login with GitHub
              </a>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col className="d-flex justify-content-center">
              <FacebookLogin />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={handleLogin}
          form="signInForm"
          type="submit"
        >
          Sign In
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignInModal;
