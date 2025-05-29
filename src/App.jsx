import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchForm from "./components/SearchForm";
import CurrentWeather from "./components/CurrentWeather";
import ForecastCard from "./components/ForecastCard";

function App() {
  const [city, setCity] = useState("");

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

      if (!res.ok) {
        throw new Error("city not found");
      }

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

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
      <SearchForm city={city} />

      {/* Current Weather Section */}
      <CurrentWeather />

      {/* 💡 Forecast Section (placeholder) */}
      <ForecastCard />
    </div>
  );
}

export default App;
