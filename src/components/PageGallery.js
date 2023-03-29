import React from "react";
import NavFilterBtn from "../containers/page-gallery/NavFilterBtn";
import ListImgGallery from "../containers/page-gallery/ListImgGallery";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PaginationBar from "../containers/page-gallery/PaginationBar";

const PageGallery = () => {
  return (
    <Container>
      <Row>
        <NavFilterBtn />
      </Row>
      <hr></hr>
      <Row>
        <ListImgGallery />
      </Row>
      <hr></hr>
      <Row>
        <PaginationBar />
      </Row>
    </Container>
  );
};

export default PageGallery;
