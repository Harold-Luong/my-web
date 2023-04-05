import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./homePage.scss";

const HomePage = () => {
  return (
    <Container fluid className="home">
      <Row className="slide"></Row>
      <Container className="home-content">
        <Row>
          <Col xs={12} md={6}>
            <div className="img1"></div>
          </Col>
          <Col xs={12} md={6}>
            <div className="img2"></div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <div className="img3"></div>
          </Col>
          <Col xs={12} md={6}>
            <div className="img4"></div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HomePage;
