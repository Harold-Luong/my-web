import React from "react";
import "./listImgGallery.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { useSelector } from "react-redux";

const ListImgGallery = () => {
  const pageReducer = useSelector((state) => state.page);
  const imageGallery = pageReducer.imageGallery;
  console.log("galery");

  return (
    <Container>
      <Row>
        <h2 className="heading-text">
          My <span>image gallery</span>
        </h2>
      </Row>
      <Row id="gallery-img">
        <ul className="image-gallery">
          {imageGallery.map((item, key) => {
            return (
              <li key={key} className={`tile scale-anm `}>
                <img src={item.src} alt={item.location}></img>
                <div className="overlay">
                  <span>{item.location}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </Row>
    </Container>
  );
};

export default ListImgGallery;
