import React from "react";
import { Container, Image } from "react-bootstrap";
import "./homePage.scss";

const HomePage = () => {
  return (
    <Container fluid className={`home-page mgTop `}>
      <div className="bgimg-1 w3-display-container w3-opacity-min">
        <div className="w3-display-middle" style={{ whiteSpace: "nowrap" }}>
          <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity w3-animate-top">
            MY <span className="w3-hide-small">WEBSITE</span> LOGO
          </span>
        </div>
      </div>
      {/* <!-- Container (About Section) --> */}
      <div className="w3-content w3-container w3-padding-64" id="about">
        <h3 className="w3-center">ABOUT ME</h3>
        <p className="w3-center">
          <em>I love photography</em>
        </p>
        <p>
          We have created a fictional "personal" website/blog, and our fictional
          character is a hobby photographer. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="w3-row">
          <div className="w3-col m6 w3-center w3-padding-large">
            <p>
              <b>
                <i className="fa fa-user w3-margin-right"></i>My Name
              </b>
            </p>
            <br />
            <Image
              src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w3-round w3-image w3-opacity w3-hover-opacity-off"
              alt="Photo of Me"
              width={500}
              height={300}
            />
          </div>
          {/* <!-- Hide this text on small devices --> */}
          <div className="w3-col m6 w3-hide-small w3-padding-large">
            <p>
              Welcome to my website. I am lorem ipsum consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row w3-center w3-dark-grey w3-padding-16">
        <div className="w3-quarter w3-section">
          <span className="w3-xlarge">14+</span>
          <br />
          Partners
        </div>
        <div className="w3-quarter w3-section">
          <span className="w3-xlarge">55+</span>
          <br />
          Projects Done
        </div>
        <div className="w3-quarter w3-section">
          <span className="w3-xlarge">89+</span>
          <br />
          Happy Clients
        </div>
        <div className="w3-quarter w3-section">
          <span className="w3-xlarge">150+</span>
          <br />
          Meetings
        </div>
      </div>

      {/* <!-- Second Parallax Image with Portfolio Text --> */}
      <div className="bgimg-2 w3-display-container w3-opacity-min">
        <div className="w3-display-middle">
          <span className="w3-xxlarge w3-text-white w3-wide">PORTFOLIO</span>
        </div>
      </div>

      {/* <!-- Container (Portfolio Section) --> */}
      <div className="w3-content w3-container w3-padding-64" id="portfolio">
        <h3 className="w3-center">MY WORK</h3>
        <p className="w3-center">
          <em>
            Here are some of my latest lorem work ipsum tipsum.
            <br /> Click on the images to make them bigger
          </em>
        </p>
        <br />
      </div>
      {/* 
      <!-- Third Parallax Image with Portfolio Text --> */}
      <div className="bgimg-3 w3-display-container w3-opacity-min">
        <div className="w3-display-middle">
          <span className="w3-xxlarge w3-text-white w3-wide">CONTACT</span>
        </div>
      </div>
      {/* <!-- Container (Contact Section) --> */}
      <div className="w3-content w3-container w3-padding-64" id="contact">
        <h3 className="w3-center">WHERE I WORK</h3>
        <p className="w3-center">
          <em>I'd love your feedback!</em>
        </p>
      </div>
    </Container>
  );
};

export default HomePage;
