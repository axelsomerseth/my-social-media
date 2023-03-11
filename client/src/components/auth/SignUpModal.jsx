import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const SignUpModal = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleExit = () => navigate("/", { replace: true });
  const handleSignup = (event) => {
    event.preventDefault();
    console.log("TODO: Sign up");
    console.log(`Username: ${username}, Password: ${password}`);
    // TODO: sign up and close modal on success and show the error on error
  };

  useEffect(() => {
    handleShow();
    return function cleanup() {
      handleClose();
    };
  }, []);

  return (
    <Modal show={show} onHide={handleClose} onExited={handleExit}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="signUpForm">
          <Form.Group>
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
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={handleSignup}
          form="signUpForm"
          type="submit"
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignUpModal;
