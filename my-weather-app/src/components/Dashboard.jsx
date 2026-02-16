import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import WeatherLayout from "../components/WeatherLayout";
import MainWeatherCard from "../components/MainWeatherCard";
import ForecastSection from "../components/ForecastSection";
import TodayHighlight from "../components/TodayHighlight";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const Dashboard = () => {
  const [city, setCity] = useState("Accra");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Current Weather
        const weatherRes = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        const weatherData = await weatherRes.json();
        setWeather(weatherData);

        // 5-day / 3-hour Forecast
        const forecastRes = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
        );
        const forecastData = await forecastRes.json();
        setForecast(forecastData);
      } catch (error) {
        console.log("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <WeatherLayout>
      <main className="flex-1 p-8 flex gap-8">
        <Sidebar />

        <div className="flex-1 space-y-6">
          <MainWeatherCard
            city={city}
            setCity={setCity}
            weather={weather}
          />

          <ForecastSection
            forecast={forecast}
            weather={weather}
          />
        </div>

        <div className="w-[350px] bg-[#111827] p-6 rounded-2xl min-h-[calc(100vh-4rem)]">
          <TodayHighlight weather={weather} />
        </div>
      </main>
    </WeatherLayout>
  );
};

export default Dashboard;
