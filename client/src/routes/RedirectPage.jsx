import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Redirect from "../components/auth/Redirect";

function RedirectPage() {
  return (
    <Container fluid>
      <Row className="mt-3 mb-3">
        <Col>
          <Redirect />
        </Col>
      </Row>
    </Container>
  );
}

export default RedirectPage;
