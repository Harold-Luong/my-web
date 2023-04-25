import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import contentData from "../../asset/contet-blog-data";
const CardContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const obj = location.state.content;
  const id = obj.id;

  const filteredContent = contentData.filter((content) => content.id === id);
  console.log(filteredContent[0].imgArr);
  return (
    <Container className="w3-animate-zoom">
      <img src={obj.thumbnail} alt="Nature" style={{ width: "100%" }}></img>
      <Row className="w3-container">
        <h3>
          <b>{obj.location}</b>
        </h3>
        <h5>
          {obj.title} <span className="w3-opacity">{obj.date}</span>
        </h5>
      </Row>
      <Row>
        <Row style={{ textAlign: "justify" }}>
          {/* <p>{obj.description}</p> */}
          {filteredContent[0].textBody.map((i, k) => {
            return <span key={k}>{i}</span>;
          })}
        </Row>
        <Row>
          <Col md={5}>
            {filteredContent[0].imgArr.map((item, key) => {
              return (
                <img
                  key={key}
                  src={item}
                  alt="Nature"
                  style={{ width: "100%" }}
                ></img>
              );
            })}
          </Col>
          <Col md={7} style={{ textAlign: "justify" }}></Col>
        </Row>
      </Row>

      <button onClick={() => navigate(-1)}>Back</button>
    </Container>
  );
};

export default CardContent;
