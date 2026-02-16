import axios from "axios";

const OpenWeatherServices = axios.create({
  baseURL:
    "https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}",

  // Now you can fetch(url)...
});

export default OpenWeatherServices;
