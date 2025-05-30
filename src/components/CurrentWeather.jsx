import React from "react";

export default function CurrentWeather({ weatherData }) {
  if (!weatherData) return null;

  return (
    <div>
      <section className="bg-white dark:bg-gray-800 rounded shadow p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Current weather</h2>
        <p>
          <span className="font-bold">City:</span> {weatherData.name}
        </p>
        <p>
          <span className="font-bold">Temperature:</span>{" "}
          {weatherData.main.temp_min}°C / {weatherData.main.temp_max}°F
        </p>
        <p>
          <span className="font-bold">Humidity:</span>{" "}
          {weatherData.main.humidity}%
        </p>
        <p>
          <span className="font-bold">Description:</span>{" "}
          {weatherData.weather[0].description}
        </p>
        {/* Weather Icon will go here */}
      </section>
    </div>
  );
}
