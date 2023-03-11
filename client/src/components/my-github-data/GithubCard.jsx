import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const GithubCard = ({ user }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={user.avatarUrl} />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {"@" + user.login}
          </Card.Subtitle>
          <Card.Text>{user.bio}</Card.Text>
          <Button variant="success" href={user.url}>
            View profile on GitHub
          </Button>
          <p></p>
          <Button variant="secondary" href={user.websiteUrl}>
            View Website
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default GithubCard;
