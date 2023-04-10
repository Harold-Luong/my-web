import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  convertTimestampToObjDate,
  formatDayShortLong,
  roundToInteger,
} from "./date";
import { fetchWeather } from "../../rootReducers";
const WeatherCard = ({ weatherData }) => {
  const dispatch = useDispatch();
  const fecthdata = () => {
    dispatch(fetchWeather());
  };
  const loading = useSelector((state) => state.weather.loading);
  const error = useSelector((state) => state.weather.error);

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!weatherData) {
    return null;
  }
  const localDate = convertTimestampToObjDate(weatherData.current.dt);
  return (
    <Row className="card-body">
      <Col xs={6} md={6}>
        <div className="weather-date-location">
          <h3>{formatDayShortLong(weatherData.current.dt, "long")}</h3>
          <span>
            <p>{localDate && localDate.date}</p>

            <h5>
              {localDate &&
                `${localDate.hour}:${
                  localDate.min < 10 ? "0" + localDate.min : localDate.min
                }`}
            </h5>

            <p>{weatherData.timezone}, Vietnam</p>
          </span>
        </div>
        <div className="weather-data d-flex">
          <div className="mr-auto">
            <h4 className="display-3">
              {roundToInteger(weatherData.current.temp)}&deg;C
            </h4>
            <h6>
              Feel: {roundToInteger(weatherData.current.feels_like)}
              <span>&deg;</span>C
            </h6>
            <p>{weatherData.current.weather[0].description}</p>
          </div>
        </div>
      </Col>

      <Col xs={6} md={6}>
        <div className="weather-reload">
          <i
            onClick={fecthdata}
            className="fa fa-refresh fa-fw"
            aria-hidden="true"
          ></i>

          {/* <i className="fa fa-refresh fa-spin fa-fw"></i> */}

          <div className="weather-location">
            Humidity:{" "}
            <span style={{ fontWeight: "600", color: "black" }}>
              {weatherData.current.humidity} %
            </span>
            <br />
            Wind:{" "}
            <span style={{ fontWeight: "600", color: "black" }}>
              {weatherData.current.wind_speed} m/s
            </span>
            {weatherData.hourly
              .filter(
                (item) =>
                  convertTimestampToObjDate(item.dt).day ===
                  convertTimestampToObjDate(weatherData.current.dt).day
              )
              .slice(1, 5)
              .map((item, key) => (
                <div key={key} style={{ marginTop: "0.7rem" }}>
                  <span style={{ fontWeight: "600", color: "black" }}>
                    {convertTimestampToObjDate(item.dt).hour}:00 -{" "}
                    {roundToInteger(item.temp)}&deg;C
                  </span>
                  <br />
                  <span>{item.weather[0].description}</span>
                </div>
              ))}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default WeatherCard;
