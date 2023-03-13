import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyFacebookData from "../components/my-facebook-data/MyFacebookData";

function MyFacebookDataPage() {
  return (
    <Container fluid>
      <Row className="mt-3 mb-3">
        <Col>
          <MyFacebookData />
        </Col>
      </Row>
    </Container>
  );
}

export default MyFacebookDataPage;
