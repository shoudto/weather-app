import React from "react";

export default function ForecastCard({ forecastData }) {
  if (!forecastData) return null;

  const forecastList = forecastData.list;
  const weekday = {};

  for (let i = 0; i < forecastData.list.length; i++) {
    let day = forecastList[i].dt_txt.split(" ")[0];
    let tempMax = forecastList[i].main.temp_max;
    let tempMin = forecastList[i].main.temp_min;

    if (!weekday[day]) {
      weekday[day] = { high: tempMax, low: tempMin };
    } else {
      weekday[day].high = Math.max(weekday[day].high, tempMax);
      weekday[day].low = Math.min(weekday[day].low, tempMin);
    }
  }

  let days = [];
  let weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  for (let day in weekday) {
    const date = new Date(day);

    days.push(
      <div
        key={date}
        className="bg-white dark:bg-gray-800 rounded shadow p-4 text-center"
      >
        <p className="font-semibold">{weekDays[date.getDay()]}</p>
        <p>🌡️ Hi:{weekday[day].high}</p>
        <p>❄️ Low: {weekday[day].low}</p>
      </div>
    );
  }

  return (
    <div>
      <section>
        <h2 className="text-xl font-semibold mb-2">6-Day Forecast</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
          {days}
        </div>
      </section>
    </div>
  );
}
