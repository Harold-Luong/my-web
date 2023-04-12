import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (provice) => {
    const apiUrl = "https://api.openweathermap.org/data/2.5/onecall";
    const latitude = provice.lat;
    const longitude = provice.lng;
    const exclude = "minutely";
    const apiKey = "80fda29861201ee84199531c5f41bb81";
    const language = "en"; //or vi
    const units = "metric";
    const url = `${apiUrl}?lat=${latitude}&lon=${longitude}&exclude=${exclude}&appid=${apiKey}&lang=${language}&units=${units}`;
    const response = await axios.get(url);

    return response.data;
  }
);
