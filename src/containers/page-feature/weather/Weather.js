import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectWeatherData } from "../../../features/wether/weatherSlice";
import "./weather.scss";
import Weakly from "./Weakly";
import WeatherCard from "./WeatherCard";

const Weather = () => {
  const weatherData = useSelector(selectWeatherData);

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
