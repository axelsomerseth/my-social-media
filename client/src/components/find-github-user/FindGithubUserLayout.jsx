import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import GithubUserForm from "./GithubUserForm";
import GithubUserCard from "./GithubUserCard";
import { If, Then } from "react-if";

import { useLazyQuery, gql } from "@apollo/client";

const GET_GITHUB_USER = gql`
  query GetUser($githubUsername: String!) {
    user(login: $githubUsername) {
      login
      id
      name
      email
      createdAt
      avatarUrl
      url
      bio
      company
      location
      websiteUrl
    }
  }
`;

const FindGithubUser = () => {
  const [githubUsername, setGithubUsername] = useState("");
  const [fetchGithubUser, { loading, error, data }] = useLazyQuery(
    GET_GITHUB_USER,
    {
      variables: { githubUsername },
    }
  );

  return (
    <>
      <Container>
        <Row>
          <Col>
            <GithubUserForm
              setGithubUsername={setGithubUsername}
              fetchGithubUser={fetchGithubUser}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <If condition={data}>
              <Then>
                <GithubUserCard user={data?.user} />
              </Then>
            </If>
            <If condition={loading}>
              <Then>
                <Spinner animation="border" variant="primary" />
              </Then>
            </If>
            <If condition={error !== undefined}>
              <Then>
                <Alert key={"danger"} variant={"danger"}>
                  <Alert.Heading>{error?.name}</Alert.Heading>
                  <p>{error?.message}</p>
                </Alert>
              </Then>
            </If>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FindGithubUser;
