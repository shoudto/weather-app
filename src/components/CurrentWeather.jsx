import React from "react";

export default function CurrentWeather({ weatherData }) {
  if (!weatherData) return null;

  const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

  return (
    <div>
      <section className="bg-white dark:bg-gray-800 rounded shadow p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Current weather</h2>
        <p>
          <span className="font-bold">City: </span>
          {weatherData.name}
        </p>
        <p>
          <span className="font-bold">Temperature: </span>
          {weatherData.main.temp_min}°C /{" "}
          {toFahrenheit(weatherData.main.temp_max).toFixed(1)}°F
        </p>
        <p>
          <span className="font-bold">Humidity: </span>
          {weatherData.main.humidity}%
        </p>
        <p>
          <span className="font-bold">Windspeed: </span>
          {weatherData.wind.speed} mph
        </p>
        <p>
          <span className="font-bold">Description: </span>
          {weatherData.weather[0].description}
        </p>
        {/* Weather Icon will go here */}
        <p>
          <span className="font-bold">Icon: </span>
        </p>
      </section>
    </div>
  );
}
