import React from "react";
import { Container, Row } from "react-bootstrap";
import "./homePage.scss";

const HomePage = () => {
  return (
    <Container fluid className="home">
      <Row style={{ textAlign: "center" }}>
        <header className="w3-display-container w3-content w3-wide" id="home">
          <img
            className="w3-image"
            src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Hamburger Catering"
          />
          <div className="w3-display-bottomleft w3-padding-large w3-opacity">
            <h1 className="w3-xxlarge">Nature</h1>
          </div>
        </header>
      </Row>

      <Container className="home-content">
        <Row>
          {/* <!-- About Section --> */}
          <div className="w3-row w3-padding-64" id="about">
            <div className="w3-col m6 w3-padding-large w3-content w3-wide  ">
              <img
                src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w3-round w3-image w3-opacity-min"
                alt="Table Setting"
                width={600}
                height={750}
              />
            </div>

            <div className="w3-col m6 w3-padding-large">
              <h1 className="w3-center">About Catering</h1>
              <br />
              <h5 className="w3-center">Tradition since 1889</h5>
              <p className="w3-large">
                The Catering was founded in blabla by Mr. Smith in lorem ipsum
                dolor sit amet, consectetur adipiscing elit consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute iruredolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.We only use{" "}
                <span className="w3-tag w3-light-grey">seasonal</span>{" "}
                ingredients.
              </p>
              <p className="w3-large w3-text-grey w3-hide-medium">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum consectetur
                adipiscing elit, sed do eiusmod temporincididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
            </div>
          </div>

          <hr />
        </Row>
        <Row>
          <div className="w3-row w3-padding-64" id="menu">
            <div className="w3-col l6 w3-padding-large">
              <h1 className="w3-center">Our Menu</h1>
              <br />
              <h4>Bread Basket</h4>
              <p className="w3-text-grey">
                Assortment of fresh baked fruit breads and muffins 5.50
              </p>
              <br />

              <h4>Honey Almond Granola with Fruits</h4>
              <p className="w3-text-grey">
                Natural cereal of honey toasted oats, raisins, almonds and dates
                7.00
              </p>
              <br />

              <h4>Belgian Waffle</h4>
              <p className="w3-text-grey">
                Vanilla flavored batter with malted flour 7.50
              </p>
              <br />

              <h4>Scrambled eggs</h4>
              <p className="w3-text-grey">
                Scrambled eggs, roasted red pepper and garlic, with green onions
                7.50
              </p>
              <br />

              <h4>Blueberry Pancakes</h4>
              <p className="w3-text-grey">
                With syrup, butter and lots of berries 8.50
              </p>
            </div>
            <div className="w3-col l6 w3-padding-large">
              <img
                src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w3-round w3-image w3-opacity-min"
                alt="Menu"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <hr />
        </Row>
      </Container>
    </Container>
  );
};

export default HomePage;
