import { useState, useEffect } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import WeatherLayout from "../components/WeatherLayout";
import SearchBar from "../components/SearchBar";
import MainWeatherCard from "../components/MainWeatherCard";
import ForecastSection from "../components/ForecastSection";
import TodayHighlight from "../components/TodayHighlight";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const Dashboard = () => {
  const [city, setCity] = useState("Accra");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError("");

        // Current Weather
        const weatherRes = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather",
          {
            params: {
              q: city,
              units: "metric",
              appid: API_KEY,
            },
          },
        );

        setWeather(weatherRes.data);

        // Forecast
        const forecastRes = await axios.get(
          "https://api.openweathermap.org/data/2.5/forecast",
          {
            params: {
              q: city,
              units: "metric",
              appid: API_KEY,
            },
          },
        );

        setForecast(forecastRes.data);
      } catch (err) {
        if (err.response?.status === 404) {
          setError("City not found. Please try again.");
        } else {
          setError("Something went wrong. Check your connection.");
        }
        setWeather(null);
        setForecast(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <WeatherLayout>
      <main className="flex flex-col lg:flex-row gap-8">

        <Sidebar weather={weather} />
      

        <div className="flex-1 space-y-6">
            <SearchBar  setCity={setCity} />
          <MainWeatherCard
            city={city}
            setCity={setCity}
            weather={weather}
            loading={loading}
            error={error}
          />

          <ForecastSection forecast={forecast} weather={weather} />
        </div>

        <div className="w-[350px] bg-[#111827] p-6 rounded-2xl min-h-[calc(100vh-4rem)]">
          <TodayHighlight weather={weather} />
        </div>
      </main>
    </WeatherLayout>
  );
};

export default Dashboard;
