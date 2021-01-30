import React from "react";
import { Link } from "react-router-dom";
import "../css/WeekDay.css";

const WeekDay = ({
  dailyWeather: {
    datetime,
    high_temp,
    low_temp,
    weather: { description, icon },
  },
}) => {
  return (
    <li className="weekday">
      <span>{new Date(datetime).toDateString().slice(0, 10)}</span>
      <div className="weather">
        <div className="weather-details">
          <img
            src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
            alt="weather"
          />
          <span style={{ marginLeft: "0.4rem" }}>
            {high_temp} / {low_temp}
            {"\u00b0"}C
          </span>
        </div>
        <span>{description}</span>
        <Link to={`/day/${new Date(datetime).toDateString().slice(0, 3)}`}>
          <img
            src="https://img.icons8.com/ios/50/000000/circled-right-2.png"
            alt="forward arrow button"
          />
        </Link>
      </div>
    </li>
  );
};

export default WeekDay;
