import React from "react";
import TagsFilterBtn from "../containers/page-gallery/TagsFilterBtn";
import ListImgGallery from "../containers/page-gallery/ListImgGallery";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PaginationBar from "../containers/page-gallery/PaginationBar";
import { Col } from "react-bootstrap";

const GalleryPage = () => {
  return (
    <Container className="mgTop ">
      <Row>
        <h1 className="heading-text" style={{ textAlign: "center" }}>
          My <span>image gallery</span>
        </h1>

        <Col xs={12} md={3}>
          <TagsFilterBtn />
        </Col>
        <Col xs={12} md={9}>
          <ListImgGallery />
          <PaginationBar />
        </Col>
      </Row>
    </Container>
  );
};

export default GalleryPage;
