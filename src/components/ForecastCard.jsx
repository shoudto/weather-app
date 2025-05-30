import React from "react";

export default function ForecastCard({ weatherData }) {
  if (!weatherData) return null;

  return (
    <div>
      <section>
        <h2 className="text-xl font-semibold mb-2">5-Day Forecast</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((day) => (
            <div
              key={day}
              className="bg-white dark:bg-gray-800 rounded shadow p-4 text-center"
            >
              <p>Day {day}</p>
              <p>High: --°</p>
              <p>Low: --°</p>
              <p>Icon</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
