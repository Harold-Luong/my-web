import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "./header.scss";
const Header = () => {
  return (
    <Nav className="container nav-header" justify defaultActiveKey="/">
      <Nav.Item>
        <NavLink to="/">Home</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/gallery">Gallery</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/about">About</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/404">404</NavLink>
      </Nav.Item>
    </Nav>
  );
};

export default Header;
