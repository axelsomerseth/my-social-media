import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FindGithubUserLayout from "../components/find-github-user/FindGithubUserLayout";

function FindGithubUserPage() {
  return (
    <Container fluid>
      <Row className="mt-3 mb-3">
        <Col>
          <FindGithubUserLayout />
        </Col>
      </Row>
    </Container>
  );
}

export default FindGithubUserPage;
