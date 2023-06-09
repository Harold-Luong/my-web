import React from "react";
import { Container, Image } from "react-bootstrap";
import "./homePage.scss";

import { Link } from "react-router-dom";
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
      <div className="w3-content  w3-container w3-padding-32" id="about">
        <h3 className="w3-center">ABOUT ME</h3>
        <p className="w3-center">
          <em>I love coding</em>
        </p>
        <p>
          Hello, I am a software developer. I am passionate about technology and
          always eager to explore new things in this field. I have studied and
          worked in the information technology industry for a long time and have
          accumulated a lot of experience in programming and software
          development.
        </p>
        <div className="w3-row">
          <div className="w3-col m6 w3-center w3-padding-large">
            <p>
              <b>
                <i className="fa fa-user w3-margin-right"></i>Lương Nguyễn Đức
                Trọng
              </b>
            </p>
            <br />
            <Image
              src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/324581184_896305721806568_7532402621965377733_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TmnxAZaSD_EAX-HnROH&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfBJD2LNy97owWKGF8fOjBbkXuvmSGfk8nzupTVMvJki7A&oe=64447562"
              className="w3-round w3-image w3-opacity w3-hover-opacity-off"
              alt="Photo of Me"
              width={500}
              height={300}
            />
            <Link to="/contact">
              <button className=" w3-margin-top w3-btn w3-white w3-border w3-round-large">
                Contact
              </button>
            </Link>
          </div>
          {/* <!-- Hide this text on small devices --> */}
          <div className="w3-col m6 w3-hide-small w3-padding-large">
            <p>
              I enjoy challenges and always strive to improve my skills. I
              believe that learning is endless, and I always try to learn from
              those who are better than me to develop my career. Additionally, I
              also have good teamwork skills and always respect the opinions of
              others.
            </p>
            <p>
              I hope to have the opportunity to meet and collaborate with many
              people in the industry to develop better products that meet the
              needs of users.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-row w3-center w3-dark-grey w3-padding-16">
        <div className="w3-third w3-section">
          <span className="w3-xlarge">Framework</span>
          <br />
          Spring MVC, Spring Boot, Seasar2, Struts, Reactjs, Jquery
        </div>
        <div className="w3-third w3-section">
          <span className="w3-xlarge">Code</span>
          <br />
          Java, JavaSript, SCSS, MySQL
        </div>
        <div className="w3-third w3-section">
          <span className="w3-xlarge">CSS</span>
          <br />
          SCSS, SASS
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
