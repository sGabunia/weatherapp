import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import WeekDay from "./components/WeekDay";
import Day from "./components/Day";
import "./css/App.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const location = "Rome";
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const api_key = `37cd8835731a4a30b6d920ffaeb032ee`;
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&days=5&key=${api_key}`
      )
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <h2>...</h2>
      </div>
    );
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="app">
            <div className="hero">
              <Header daysCount={data.length} city={location} />
              <ul className="weekdays">
                {data.map((day, i) => (
                  <WeekDay key={i} dailyWeather={day} />
                ))}
              </ul>
            </div>
          </div>
        </Route>
        <Route path="/day/:id">
          <Day weather={data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
