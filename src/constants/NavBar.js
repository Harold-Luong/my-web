import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "./navBar.scss";
import { Container, Row, Col } from "react-bootstrap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      {/* <Row>
        <Nav
          style={{ letterSpacing: "4px" }}
          className={`navbar navbar-expand-lg navbar-light bg-light`}
          defaultActiveKey="/"
        >
          <button className="navbar-toggler" onClick={() => setIsOpen(!isOpen)}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <Nav.Item>
              <NavLink
                to="/"
                className="w3-bar-item w3-button"
                onClick={() => setIsOpen(!isOpen)}
              >
                Home
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink
                to="/feture"
                className="w3-bar-item w3-button"
                onClick={() => setIsOpen(!isOpen)}
              >
                Feture
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/gallery"
                className="w3-bar-item w3-button"
                onClick={() => setIsOpen(!isOpen)}
              >
                Gallery
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/blog"
                className="w3-bar-item w3-button"
                onClick={() => setIsOpen(!isOpen)}
              >
                Blog
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/about"
                className="w3-bar-item w3-button"
                onClick={() => setIsOpen(!isOpen)}
              >
                About
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink
                to="/contact"
                className="w3-bar-item w3-button"
                onClick={() => setIsOpen(!isOpen)}
              >
                Contact
              </NavLink>
            </Nav.Item>
          </div>
        </Nav>
      </Row> */}

      <Nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        style={{ letterSpacing: "4px" }}
        defaultActiveKey="/"
      >
        <Container fluid>
          <button
            class="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <Nav.Item>
                <NavLink
                  to="/"
                  className="w3-bar-item w3-button"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Home
                </NavLink>
              </Nav.Item>

              <Nav.Item>
                <NavLink
                  to="/feture"
                  className="w3-bar-item w3-button"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Feture
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="/gallery"
                  className="w3-bar-item w3-button"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Gallery
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="/blog"
                  className="w3-bar-item w3-button"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Blog
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="/about"
                  className="w3-bar-item w3-button"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  About
                </NavLink>
              </Nav.Item>

              <Nav.Item>
                <NavLink
                  to="/contact"
                  className="w3-bar-item w3-button"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Contact
                </NavLink>
              </Nav.Item>
            </ul>
            <div class="d-flex">
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
          </div>
        </Container>
      </Nav>
    </Container>
  );
};

export default NavBar;
