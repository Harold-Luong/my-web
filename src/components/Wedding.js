import React from "react";
import "./wedding.scss";
import { Container } from "react-bootstrap";
const Wedding = () => {
  return (
    <Container fluid className="mgTop wedding">
      <div className="parallax">
        <div id="group1" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <div className="title">Pure CSS Parallax</div>
          </div>
        </div>

        <div id="group2" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <div className="title">
              <h1>HOPE YOU CAN MAKE IT!</h1>
            </div>
          </div>

          <div className="parallax__layer parallax__layer--none">
            <div className="title">No JavaScript Required! </div>
          </div>
        </div>

        <div id="group3" className="parallax__group">
          <div className="parallax__layer parallax__layer--fore">
            <div className="title">After Layer.</div>
          </div>
          <div className="parallax__layer parallax__layer--base">
            <div className="title">You Can Have Layer...</div>
          </div>
        </div>

        <div id="group4" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <div className="title">Still More.</div>
          </div>
          <div className="parallax__layer parallax__layer--back">
            <div className="title">And More.</div>
          </div>
          <div className="parallax__layer parallax__layer--deep">
            <div className="title">More Layers.</div>
          </div>
        </div>

        <div id="group5" className="parallax__group">
          <div className="parallax__layer parallax__layer--fore">
            <div className="title">Than the Background Layer.</div>
          </div>
          <div className="parallax__layer parallax__layer--base">
            <div className="title">Scrolling at Different Speeds</div>
          </div>
        </div>

        {/* <div id="group6" className="parallax__group">
          <div className="parallax__layer parallax__layer--back">
            <div className="title">To Achieve a Complete Parallax Effect.</div>
          </div>
          <div className="parallax__layer parallax__layer--base">
            <div className="title">Using ONLY CSS!</div>
          </div>
        </div> */}

        {/* <div id="group7" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <div className="title">Hope You Enjoyed It!</div>
          </div>
        </div> */}
      </div>
    </Container>
  );
};

export default Wedding;
