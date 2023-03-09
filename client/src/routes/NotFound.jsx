import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

function NotFound() {
  return (
    <Container fluid>
      <Row>
        <Col className="d-flex justify-content-center mt-5">
          <Alert key="danger" variant="danger" dismissible={false}>
            <Alert.Heading>
              <h1>Page not found</h1>
            </Alert.Heading>
            <p>
              Please try going to another page, like{" "}
              <Alert.Link href="/">Home</Alert.Link>
            </p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
