import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <Container fluid>
      <Row className="mt-3 mb-3">
        <Col className="d-flex justify-content-center">
          <h1>Home</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
