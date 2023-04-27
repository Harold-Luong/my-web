import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
// import "./blogs.scss";
import TagsFilter from "../constants/TagsFilter";
import LocationBlogs from "../containers/page-blog/LocationBlogs";
// import PaginationBar from "../containers/page-gallery/PaginationBar";
import CardBlog from "../containers/page-blog/CardBlog";
import { Outlet } from "react-router-dom";

const Blogs = () => {
  const location = useLocation();

  return (
    <Container className="mgTop">
      {location.pathname !== "/blog" ? (
        <Outlet />
      ) : (
        <>
          <Row>
            <Col md={8} xs={12}>
              <CardBlog />
            </Col>
            <Col md={4} xs={12}>
              <TagsFilter />
              <LocationBlogs />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Blogs;
