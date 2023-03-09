import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MyGithubDataLayout from "../components/my-github-data/MyGithubDataLayout";

function MyGithubDataPage() {
  return (
    <Container fluid>
      <Row className="mt-3 mb-3">
        <Col>
          <MyGithubDataLayout />
        </Col>
      </Row>
    </Container>
  );
}

export default MyGithubDataPage;
