import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async () => {
    const apiUrl = "https://api.openweathermap.org/data/2.5/onecall";
    const latitude = 10.789695264473115;
    const longitude = 106.69724677586692;
    const exclude = "minutely";
    const apiKey = "80fda29861201ee84199531c5f41bb81";
    const language = "en"; //or vi
    const units = "metric";
    // const city = "Ho Chi Minh";

    const url = `${apiUrl}?lat=${latitude}&lon=${longitude}&exclude=${exclude}&appid=${apiKey}&lang=${language}&units=${units}`;

    const response = await axios.get(url);

    return response.data;
  }
);
