import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import WeatherLayout from "../components/WeatherLayout";
import SearchBar from "../components/SearchBar";
import MainWeatherCard from "../components/MainWeatherCard";
import ForecastSection from "../components/ForecastSection";
import TodayHighlight from "../components/TodayHighlight";
import Footer from "../components/Footer";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const Dashboard = () => {
  const [city, setCity] = useState("Accra");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [recentCities, setRecentCities] = useState(() => {
  const saved = localStorage.getItem("recentCities");
  return saved ? JSON.parse(saved) : [];
});

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


        const searchedCity = weatherRes.data.name;

// Remove duplicate if exists
const updatedCities = [
  searchedCity,
  ...recentCities.filter(c => c !== searchedCity)
].slice(0, 5); // keep only 5

setRecentCities(updatedCities);
localStorage.setItem("recentCities", JSON.stringify(updatedCities));

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
    <div>
      <Header />
      <WeatherLayout>
        <main className="flex-1 p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Sidebar */}
          <div className="hidden lg:block">
            <Sidebar weather={weather} />
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            <SearchBar setCity={setCity} recentCities={recentCities} />

            <MainWeatherCard
              city={city}
              weather={weather}
              loading={loading}
              error={error}
            />

            <ForecastSection forecast={forecast} weather={weather} />
          </div>

          {/* Right Panel */}
          <div className="w-full lg:w-[350px] bg-[#111827] p-4 sm:p-6 rounded-2xl">
            <TodayHighlight weather={weather} />
          </div>
        </main>
      </WeatherLayout>

      <Footer />
    </div>
  );
};

export default Dashboard;
