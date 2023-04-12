import React from "react";
import "./wedding.scss";
import { Container } from "react-bootstrap";
const Wedding = () => {
  return (
    // <Container fluid className="mgTop wedding">
    //   {/* <!-- Header / Home--> */}
    //   <header
    //     className="w3-display-container w3-wide bgimg w3-grayscale-min"
    //     id="home"
    //   >
    //     <div className="w3-display-middle w3-text-white w3-center">
    //       <h1 className="w3-jumbo">Jane & John</h1>
    //       <h2>Are getting married</h2>
    //       <h2>
    //         <b>17.07.2017</b>
    //       </h2>
    //     </div>
    //   </header>
    //   {/* <!-- Navbar (sticky bottom) --> */}
    //   {/* <div className="w3-bottom w3-hide-small">
    //     <div className="w3-bar w3-white w3-center w3-padding w3-opacity-min w3-hover-opacity-off">
    //       <a
    //         href="#home"
    //         style={{ width: "25%" }}
    //         className="w3-bar-item w3-button"
    //       >
    //         Home
    //       </a>
    //       <a
    //         href="#us"
    //         style={{ width: "25%" }}
    //         className="w3-bar-item w3-button"
    //       >
    //         Jane & John
    //       </a>
    //       <a
    //         href="#wedding"
    //         style={{ width: "25%" }}
    //         className="w3-bar-item w3-button"
    //       >
    //         Wedding
    //       </a>
    //       <a
    //         href="#rsvp"
    //         style={{ width: "25%" }}
    //         className="w3-bar-item w3-button w3-hover-black"
    //       >
    //         RSVP
    //       </a>
    //     </div>
    //   </div> */}

    //   {/* <!-- About / Jane And John --> */}
    //   <section id="hero-1">
    //     <Container
    //       fluid
    //       className="w3-container w3-padding-64 w3-pale-red w3-grayscale-min"
    //       id="us"
    //     >
    //       <div className="w3-content">
    //         <h1 className="w3-center w3-text-grey">
    //           <b>Jane & John</b>
    //         </h1>
    //         <img
    //           className="w3-round w3-grayscale-min"
    //           src="https://www.w3schools.com/w3images/wedding_couple2.jpg"
    //           style={{ width: "100%", margin: "32px 0" }}
    //         />
    //         <p>
    //           <i>
    //             You all know us. And we all know you. We are getting married
    //             lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    //             enim ad minim veniam, quis nostrud exercitation ullamco laboris
    //             nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
    //             cupidatat non proident, sunt in culpa qui officia deserunt
    //             mollit anim id est laborum consectetur adipiscing elit, sed do
    //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    //             enim ad minim veniam, quis nostrud exercitation ullamco laboris
    //             nisi ut aliquip ex ea commodo consequat.
    //           </i>
    //         </p>
    //         <br />
    //         <p className="w3-center">
    //           <a
    //             href="#wedding"
    //             className="w3-button w3-black w3-round w3-padding-large w3-large"
    //           >
    //             Wedding Details
    //           </a>
    //         </p>
    //       </div>
    //     </Container>
    //   </section>

    //   {/* <!-- Background photo --> */}
    //   <section className="normal-scroll">
    //     <Container fluid className="w3-display-container bgimg2">
    //       <div className="w3-display-middle w3-text-white w3-center">
    //         <h1 className="w3-jumbo" style={{ color: "black" }}>
    //           You Are Invited
    //         </h1>
    //         <br />
    //         <h2>Of course..</h2>
    //       </div>
    //     </Container>
    //   </section>
    //   {/* <!-- Wedding information --> */}
    //   <section id="hero-2">
    //     <Container
    //       fluid
    //       className="w3-container w3-padding-64 w3-pale-red w3-grayscale-min w3-center"
    //       id="wedding"
    //     >
    //       <div className="w3-content">
    //         <h1 className="w3-text-grey">
    //           <b>THE WEDDING</b>
    //         </h1>
    //         <img
    //           className="w3-round-large w3-grayscale-min"
    //           src="https://www.w3schools.com/w3images/wedding_location.jpg"
    //           style={{ width: "100%", margin: "64px 0" }}
    //         />
    //         <div className="w3-row">
    //           <div className="w3-half">
    //             <h2>When</h2>
    //             <p>Wedding Ceremony - 2:00pm</p>
    //             <p>Reception & Dinner - 5:00pm</p>
    //           </div>
    //           <div className="w3-half">
    //             <h2>Where</h2>
    //             <p>Some place, an address</p>
    //             <p>Some where, some address</p>
    //           </div>
    //         </div>
    //       </div>
    //     </Container>
    //   </section>

    //   {/* <!-- RSVP section --> */}
    //   <section className="normal-scroll">
    //     <Container
    //       fluid
    //       className="w3-container w3-padding-64 w3-pale-red w3-center w3-wide"
    //       id="rsvp"
    //     >
    //       <h1>HOPE YOU CAN MAKE IT!</h1>
    //       <p className="w3-large">Kindly Respond By January, 2017</p>
    //       <p className="w3-large">
    //         <button>Go</button>
    //       </p>
    //     </Container>
    //   </section>
    //   {/* <!-- RSVP modal --> */}
    // </Container>
    <Container fluid className="mgTop wedding">
      <div className="parallax">
        <div id="group1" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <div className="title">Pure CSS Parallax</div>
          </div>
        </div>

        <div id="group2" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <div className="title" style={{ float: "right" }}>
              <section className="normal-scroll">
                <Container
                  fluid
                  className="w3-container w3-padding-64 w3-pale-red w3-center w3-wide"
                  id="rsvp"
                >
                  <h1>HOPE YOU CAN MAKE IT!</h1>
                  <p className="w3-large">Kindly Respond By January, 2017</p>
                  <p className="w3-large">
                    <button>Go</button>
                  </p>
                </Container>
              </section>
            </div>
          </div>
          <div className="parallax__layer parallax__layer--back">
            <div className="title">No JavaScript Required!</div>
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

        <div id="group6" className="parallax__group">
          <div className="parallax__layer parallax__layer--back">
            <div className="title">To Achieve a Complete Parallax Effect.</div>
          </div>
          <div className="parallax__layer parallax__layer--base">
            <div className="title">Using ONLY CSS!</div>
          </div>
        </div>

        <div id="group7" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <div className="title">Hope You Enjoyed It!</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Wedding;
