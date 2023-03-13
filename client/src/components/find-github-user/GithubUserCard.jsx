import React from "react";
import Card from "react-bootstrap/Card";

const GithubUserCard = ({ user }) => {
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
          <a
            className="btn btn-success"
            href={user.url}
            target="_blank"
            rel="noreferrer"
          >
            View profile on GitHub
          </a>
          <p></p>
          <a
            className="btn btn-secondary"
            href={user.websiteUrl}
            target="_blank"
            rel="noreferrer"
          >
            View Website
          </a>
        </Card.Body>
      </Card>
    </>
  );
};

export default GithubUserCard;
