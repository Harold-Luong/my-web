import React, { useState } from "react";
import "./listImgGallery.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import ShowModal from "./ShowModal";

const ListImgGallery = () => {
  const [modalShow, setModalShow] = useState(false);
  const [dataModal, setdataModal] = useState([]);
  const handleClose = () => setModalShow(false);
  const handleShow = (data) => {
    setdataModal(data);
    setModalShow(true);
  };
  const imageGallery = useSelector((state) => state.page.imageGallery);

  const setShow = useSelector((state) => state.page.show);

  return (
    <Container>
      <Row>
        <h2 className="heading-text">
          My <span>image gallery</span>
        </h2>
      </Row>
      <Row>
        <ul className="ul-image-gallery">
          {imageGallery.map((item, key) => (
            <li key={key} className={`li-img ${setShow ? "show" : ""} `}>
              <img src={item.src} alt={item.location} />
              <div className="overlay" onClick={() => handleShow(item)}>
                <span>{item.location}</span>
              </div>
            </li>
          ))}
        </ul>
        <ShowModal show={modalShow} onHide={handleClose} item={dataModal} />
      </Row>
    </Container>
  );
};

export default ListImgGallery;
