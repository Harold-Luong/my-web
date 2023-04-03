import React from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "./showModal.scss";
const ShowModal = (props) => {
  const item = props.item;
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {item.location}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={4} md={4}>
              <Image
                src={item.src}
                fluid
                alt={item.location}
                className="img-size"
              />
            </Col>
            <Col xs={8} md={4}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default ShowModal;
