import React from "react";

export default function CurrentWeather() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-800 rounded shadow p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Current weather</h2>
        <p>City: --</p>
        <p>Temperature: --°C / --°F</p>
        <p>Humidity --%</p>
        <p>Description: --</p>
        {/* Weather Icon will go here */}
      </section>
    </div>
  );
}
