import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container
      style={{ marginTop: "2rem", bottom: "0" }}
      fluid
      className="w3-center  w3-padding-16 w3-opacity w3-hover-opacity-off"
    >
      <hr />
      <a href="#top" className="btn w3-light-grey">
        <i className="fa fa-arrow-up w3-margin-right"></i>To the top
      </a>

      <p>Powered by ductrong</p>
    </Container>
  );
};

export default Footer;
