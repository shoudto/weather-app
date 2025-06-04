import React from "react";

export default function ForecastCard({ forecastData }) {
  if (!forecastData) return null;

  console.log(forecastData.list[0]);

  const forecastList = forecastData.list;
  const weekday = {};

  for (let i = 0; i < forecastData.list.length; i++) {
    const day = forecastList[i].dt_txt.split(" ")[0];
    const tempMax = forecastList[i].main.temp_max;
    const tempMin = forecastList[i].main.temp_min;
    const icon = forecastList[i].weather[0].icon;

    if (!weekday[day]) {
      weekday[day] = { high: tempMax, low: tempMin, icon: icon };
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
    const iconUrl = `https://openweathermap.org/img/wn/${weekday[day].icon}@2x.png`;

    days.push(
      <div
        key={date}
        className="bg-white dark:bg-gray-800 rounded shadow p-4 text-center"
      >
        <p className="font-semibold">{weekDays[date.getDay()]}</p>
        <p>🌡️ Hi:{weekday[day].high}</p>
        <p>❄️ Low: {weekday[day].low}</p>
        <img src={iconUrl} alt="not working" className="mx-auto w-16 h-16" />
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
