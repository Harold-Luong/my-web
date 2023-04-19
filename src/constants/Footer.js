import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  const handleClickToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container
      style={{ marginTop: "2rem", bottom: "0" }}
      fluid
      className="w3-center"
    >
      <hr />
      <button
        onClick={handleClickToTop}
        className="btn w3-opacity w3-light-grey w3-hover-opacity-off"
      >
        <i className="fa fa-arrow-up w3-margin-right"></i>To the top
      </button>
      <ShowTime />
    </Container>
  );
};

const ShowTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  return (
    <div style={{ padding: "1rem" }}>{dateTimeFormat.format(currentTime)}</div>
  );
};
export default Footer;
