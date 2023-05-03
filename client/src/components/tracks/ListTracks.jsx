import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;

function ListTracks() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_BASE_URL}/tracks`)
      .then((response) => {
        response.json().then((data) => {
          if (data.tracks && data.tracks.length) {
            setTracks(data.tracks);
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });

    // eslint-disable-next-line
  }, []);

  return (
    <Container className="pb-5 pt-3">
      <Row lg={3}>
        {tracks.map((track) => {
          const albumCover = track.album.images.find(
            (el) => (el.height = 300)
          ).url;
          const artists = track.artists.map((elem) => elem.name).join(", ");

          return (
            <Col
              key={track.id}
              className="p-2 d-flex align-items-center justify-content-center"
            >
              <Card style={{ width: "20rem", height: "34rem" }}>
                <Card.Img
                  variant="top"
                  src={albumCover}
                  alt={`${track.album.name} album cover`}
                />
                <Card.Body>
                  <Card.Title>{track.name + " - " + artists}</Card.Title>
                  <Card.Text>
                    Release date: {track.album.release_date}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <audio autoPlay={false} controls={true} preload="none">
                    <source src={track.preview_url} type="audio/mpeg" />
                    Your browser does not support the audio tag.
                  </audio>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default ListTracks;
