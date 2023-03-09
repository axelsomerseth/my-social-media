import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MyGithubDataPage() {
  return (
    <Container fluid>
      <Row className="mt-3 mb-3">
        <Col className="d-flex justify-content-center">
          <h1>My Github Data</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default MyGithubDataPage;
