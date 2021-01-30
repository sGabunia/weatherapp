import React from "react";
import "../css/Day.css";
import { useParams, Link } from "react-router-dom";

const Day = ({ weather }) => {
  const id = useParams().id;

  const selectedDay = weather.find(
    (day) => new Date(day.datetime).toDateString().slice(0, 3) === id
  );

  const {
    high_temp,
    low_temp,
    weather: { icon, description },
    wind_spd,
    wind_cdir_full,
    datetime,
  } = selectedDay;

  if (!selectedDay) {
    return <div>...</div>;
  }

  return (
    <section>
      <div className="day">
        <h1 style={{ textAlign: "center" }}>
          {new Date(datetime).toDateString().slice(0, 10)}
        </h1>
        <div className="day-main-data">
          <img
            src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
            alt="weather"
          />
          <div>
            <p>
              <strong>{description}</strong>
            </p>
            <p>
              The high will be{" "}
              <strong>
                {" "}
                {high_temp} {"\u00b0"}C
              </strong>
              , the low will be{" "}
              <strong>
                {low_temp} {"\u00b0"}C
              </strong>
            </p>
          </div>
        </div>
        <div className="day-wind-data">
          <p>
            Wind speed: <strong>{wind_spd} mm/h</strong>{" "}
          </p>
          <p>
            Wind direction: <strong>{wind_cdir_full}</strong>{" "}
          </p>
        </div>
        <Link to="/">
          <img
            src="https://img.icons8.com/ios/50/000000/circled-left-2.png"
            alt="back arrow button"
            style={{ margin: "1rem auto", cursor: "pointer" }}
          />
        </Link>
      </div>
    </section>
  );
};

export default Day;
