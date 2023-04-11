import React from "react";
import { Col, Container, Row } from "react-bootstrap";
 
import Weather from "../containers/page-feature/weather/Weather"
const Feature = () => {
  return (
    <Container className="feature mgTop">
      <Row>
        <Col sm={8} md={8} lg={8}>
          <h2>Weather</h2>
          <Weather/>
        </Col>
        <Col sm={4} md={4} lg={4}>
        <h2>Location</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Feature;
