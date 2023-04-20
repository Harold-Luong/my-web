import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./weather.scss";
import Weakly from "./Weakly";
import { useSelector } from "react-redux";

import WeatherCard from "./WeatherCard";
const Weather = () => {
  const weatherData = useSelector((state) => state.weather.weatherData);
  console.log(weatherData);
  return (
    <Container>
      <Row className="card-weather-parent">
        <Col lg={12}>
          {/* <!--weather card--> */}
          <div className="card-weather">
            <WeatherCard weatherData={weatherData} />
            {/* <!--weather card ends--> */}
            <Weakly weatherData={weatherData} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Weather;
