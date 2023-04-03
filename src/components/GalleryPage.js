import React from "react";
import NavFilterBtn from "../containers/page-gallery/NavFilterBtn";
import ListImgGallery from "../containers/page-gallery/ListImgGallery";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PaginationBar from "../containers/page-gallery/PaginationBar";

const GalleryPage = () => {
  return (
    <Container>
      <Row>
        <NavFilterBtn />
      </Row>

      <Row>
        <ListImgGallery />
      </Row>

      <Row>
        <PaginationBar />
      </Row>
    </Container>
  );
};

export default GalleryPage;
