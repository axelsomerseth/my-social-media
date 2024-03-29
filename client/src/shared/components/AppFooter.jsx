import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AppFooter = () => {
  return (
    <footer>
      <Navbar fixed="bottom" bg="light" variant="light">
        <Container fluid className="justify-content-center">
          <Row>
            <Col>
              <span className="text-muted">
                Crafted with curiosity &#x1F440;
              </span>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </footer>
  );
};

export default AppFooter;
