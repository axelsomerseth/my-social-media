import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GithubUserForm from "./GithubUserForm";
import GithubCard from "./GithubCard";

const user = {
  login: "axelsomerseth",
  id: "MDQ6VXNlcjE4NzQ2MjUx",
  name: "Axel Somerseth Cordova",
  email: "axelsomerseth@gmail.com",
  createdAt: "2016-04-30T00:55:49Z",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/18746251?u=516f95088986ab064c0fb701aed30e70e35a04f3&v=4",
  url: "https://github.com/axelsomerseth",
  bio: "🏋🏻\u200d♂️ • Healthy man.\r\n📚 • Always learning.\r\n💰 • Stocks and Bitcoin.\r\n👨🏻\u200d💻 • Software Engineer.\r\n🏆 • Friendly.\r\n🎒 • Camping and Exploration.",
  company: null,
  location: "Honduras",
};

const MyGithubDataLayout = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <GithubUserForm />
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <GithubCard user={user} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyGithubDataLayout;
