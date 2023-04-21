import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
const CardContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const obj = location.state.content;

  return (
    <Container className="w3-animate-zoom">
      <img src={obj.src} alt="Nature" style={{ width: "100%" }}></img>
      <Row className="w3-container">
        <h3>
          <b>{obj.location}</b>
        </h3>
        <h5>
          {obj.title} <span className="w3-opacity">April 7, 2014</span>
        </h5>
      </Row>
      <Row>
        <Row style={{ textAlign: "justify" }}>
          <p>{obj.description}</p>
        </Row>
        <Row>
          <Col md={5}>
            <img src={obj.src} alt="Nature" style={{ width: "100%" }}></img>
          </Col>
          <Col md={7} style={{ textAlign: "justify" }}>
            <p>
              We have created a fictional "personal" website/blog, and our
              fictional character is a hobby photographer. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
        </Row>
      </Row>

      <button onClick={() => navigate(-1)}>Back</button>
    </Container>
  );
};

export default CardContent;
