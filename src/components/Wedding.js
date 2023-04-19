import React from "react";
import "./wedding.scss";
import { Container } from "react-bootstrap";
const Wedding = () => {
  return (
    <Container fluid className="mgTop wedding">
      <iframe
        title="Love Together"
        src="https://harold-luong.github.io/love-together/"
        width="100%"
        height="100%"
      />
    </Container>
  );
};

export default Wedding;
