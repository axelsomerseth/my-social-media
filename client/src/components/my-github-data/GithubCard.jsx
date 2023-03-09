import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const GithubCard = ({ user }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={user.avatarUrl} />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.bio}</Card.Text>
          <Button variant="primary" href={user.url}>
            View profile on GitHub
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default GithubCard;
