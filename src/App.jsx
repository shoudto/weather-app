import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchForm from "./components/SearchForm";
import CurrentWeather from "./components/CurrentWeather";
import ForecastCard from "./components/ForecastCard";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  // added comment
  // Weather API
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!city) return;

    try {
      // fetching the api
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_OPENWEATHER_API_KEY
        }&units=metric`
      );

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${
          import.meta.env.VITE_OPENWEATHER_API_KEY
        }`
      );

      if (!res.ok) {
        throw new Error("city not found");
      }

      const data = await res.json();
      setWeatherData(data);

      const dataForecast = await forecastRes.json();
      setForecastData(dataForecast);

      // localStorage
      if (!searchHistory.includes(city)) {
        const updatedHistory = [city, ...searchHistory];
        setSearchHistory(updatedHistory);
        localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("searchHistory"));
    const savedCity = localStorage.getItem("city");

    if (savedHistory) {
      setSearchHistory(savedHistory);
    }

    if (savedCity) {
      setCity(savedCity);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white p-4">
      {/* HEADER */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Weather Dashboard</h1>
        <button className="text-sm bg-gray-300 px-3 py-1 rounded">
          Dark mode
        </button>
      </header>

      {/* Search Form */}
      <SearchForm city={city} setCity={setCity} handleSearch={handleSearch} />

      {/* Current Weather Section */}
      <CurrentWeather weatherData={weatherData} />

      {/* 💡 Forecast Section (placeholder) */}
      <ForecastCard forecastData={forecastData} />
    </div>
  );
}

export default App;
