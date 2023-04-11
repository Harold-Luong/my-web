import React from "react";
import {
  convertTimestampToObjDate,
  formatDayShortLong,
  roundToInteger,
} from "./date";

const Weakly = ({ weatherData }) => {
  const ImgWeather = (icon) => {
    const src = `https://openweathermap.org/img/wn/${icon.icon}@2x.png`;
    return (
      <img style={{ width: "50px", height: "50px" }} src={src} alt="icon" />
    );
  };
  return (
    <div className="d-flex weakly-weather">
      {weatherData &&
        weatherData.daily.slice(0, 7).map((day, key) => (
          <div key={key} className="weakly-weather-item">
            <p className="mb-0">
              {convertTimestampToObjDate(day.dt).day}
              <br />
              {formatDayShortLong(day.dt, "short")}
            </p>
            <i>
              <ImgWeather icon={day.weather[0].icon} />
            </i>
            <p className="mb-0">
              {roundToInteger(day.temp.max)}&deg;/
              {roundToInteger(day.temp.min)}&deg;
            </p>
          </div>
        ))}
    </div>
  );
};

export default Weakly;
