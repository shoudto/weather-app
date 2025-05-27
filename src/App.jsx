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
    </div>
  );
}

export default App;
