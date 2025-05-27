import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Later trigger fetch here.
    console.log("search for:", city);
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
      <form className="mb-6 flex gap-2">
        <input
          className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          type="submit"
        >
          Search
        </button>
      </form>

      {/* Current Weather Section */}
      <section className="bg-white dark:bg-gray-800 rounded shadow p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Current weather</h2>
        <p>City: --</p>
        <p>Temperature: --°C / --°F</p>
        <p>Humidity --%</p>
        <p>Description: --</p>
        {/* Weather Icon will go here */}
      </section>

      {/* 💡 Forecast Section (placeholder) */}
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

export default App;
