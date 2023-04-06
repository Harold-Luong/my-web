import React, { useState } from "react";
import sun from "../asset/img-mode/sun.png";
import moon from "../asset//img-mode/moon.png";
import logo from "../asset//img-mode/logo.png";
import { Link } from "react-router-dom";
import "./navBar.scss";
import { useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const [theme, setTheme] = useState(false);
  const handleTheme = () => {
    setTheme(!theme);
  };

  const location = useLocation();
  const currentPath = location.pathname;
  const currentPage = currentPath.substring(1);
  console.log(currentPage); // In ra tên trang hiện tại

  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      bg={theme ? "dark" : "light"}
      variant={theme ? "dark" : "light"}
    >
      <Nav>
        <Nav.Item>
          <Nav.Link className="navbar-brand" href="/">
            <img alt="logo" src={logo} className="img-logo" />
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Nav className="me-auto">
        <img
          alt="mode"
          onClick={handleTheme}
          className="img-change-mode "
          src={!theme ? moon : sun}
        />
      </Nav>

      {/* toggle  btn */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      {/* nav  */}
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          style={{ letterSpacing: "4px", textAlign: "left" }}
          defaultActiveKey={currentPage ? currentPage : "/"}
        >
          <Nav.Item>
            <Nav.Link as={Link} eventKey="/" to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              eventKey="feature"
              to="/feature"
              className="nav-link"
            >
              Feature
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              eventKey="gallery"
              to="/gallery"
              className="nav-link"
            >
              Gallery
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} eventKey="blog" to="/blog" className="nav-link">
              Blog
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              eventKey="about"
              to="/about"
              className="nav-link"
            >
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              eventKey="contact"
              to="/contact"
              className="nav-link"
            >
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
