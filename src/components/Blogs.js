import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { imageGalleryData } from "../asset/gallery-data";
import "./blogs.scss";
const Blogs = () => {
  return (
    <Container className="mgTop">
      <Row>
        <Col className=" w3-padding-16 content" md={8} xs={12}>
          <div className=" grid-container">
            {imageGalleryData.map((item, key) => {
              if (key < 10)
                return (
                  <div key={key} className="card-blog">
                    <img className="grid-item grid-item-1" src={item.src} />
                    <div className="entry-meta w3-padding-16">
                      <span className="byline ">
                        by
                        <span className="author vcard">
                          <a className="url fn n" href="/blog">
                            Jane Smith
                          </a>
                        </span>
                      </span>
                      <span className="posted-on">
                        <span className="posted-on-delimeter"> - </span>
                        <a href="/blog" rel="bookmark">
                          <time
                            className="entry-date published"
                            dateTime="2017-04-20T08:47:44+00:00"
                          >
                            April 20, 2017
                          </time>
                        </a>
                      </span>
                      <h2 className="entry-title">
                        Explore new places every single day
                      </h2>
                    </div>

                    <div className="text-blog">
                      {item.description} Integer at pharetra metus, non
                      porttitor lorem. Pellentesque consectetur lacus at erat
                      maximus fringilla. Mauris suscipit commodo lacus id
                      rutrum. Suspendisse potenti. Vestibulum cursus lobortis
                      suscipit. Pellentesque vel eleifend urna. Praesent id
                      pellentesque metus. Aenean accumsan ipsum ac consectetur
                      convallis. Sed efficitur blandit turpis ut rhoncus.
                      Integer vehicula risus eget purus porttitor gravida. Ut
                      dapibus aliquet quam, non tempus elit varius non. Aliquam
                      rutrum molestie ipsum eu feugiat.
                    </div>
                    <hr></hr>

                    <div className="entry-footer index-entry">
                      <p>
                        <a
                          href="https://colorlibhub.com/blaskan/2017/04/20/explore-new-places-every-single-day/#more-23"
                          className="more-link"
                        >
                          <span className="screen-reader-text"></span>
                          <span className="meta-nav"> Continue reading →</span>
                        </a>
                      </p>
                    </div>
                  </div>
                );
            })}
          </div>
        </Col>
        <Col className=" tags  " md={4} xs={12}>
          <div className=" w3-border w3-margin">
            <div className="w3-container w3-padding">
              <h4>Tags</h4>
            </div>
            <div className="w3-container w3-white">
              <p>
                <span className="w3-tag w3-tag-active w3-margin-bottom">
                  Travel
                </span>
                <span className="w3-tag w3-margin-bottom">New York</span>
                <span className="w3-tag w3-margin-bottom">London</span>
                <span className="w3-tag w3-margin-bottom">IKEA</span>
                <span className="w3-tag w3-margin-bottom">NORWAY</span>
                <span className="w3-tag w3-margin-bottom">DIY</span>
                <span className="w3-tag w3-margin-bottom">Ideas</span>
                <span className="w3-tag w3-margin-bottom">Baby</span>
                <span className="w3-tag w3-margin-bottom">Family</span>
                <span className="w3-tag w3-margin-bottom">News</span>
                <span className="w3-tag w3-margin-bottom">Clothing</span>
                <span className="w3-tag w3-margin-bottom">Shopping</span>
                <span className="w3-tag w3-margin-bottom">Sports</span>
                <span className="w3-tag w3-margin-bottom">Games</span>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Blogs;
