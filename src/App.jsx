import "./App.css";
import Header from "./components/Header";
import WeatherContent from "./components/WeatherContent";
import { fetchWeather } from "./util/http";
import { useEffect, useState } from "react";
import {
  formatHourlyData,
  formatDailyData,
  formatCurrentData,
} from "./util/formatData";
import { useContext } from "react";
import WeatherContextProvider from "./store/WeatherContext";
import { WeatherContext } from "./store/WeatherContext";

function App() {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  const weatherCtx = useContext(WeatherContext);

  useEffect(() => {
    async function fetchWeatherData() {
      setIsFetching(true);
      try {
        const data = await fetchWeather();
        console.log("all data", data);

        /* set up context */
        weatherCtx.setDaily(data.daily);
        weatherCtx.setHourly(data.hourly);
        weatherCtx.setCurrent(data.current);

        console.log("hourly", formatHourlyData(data.hourly));
        console.log("daily", formatDailyData(data.daily));
        console.log("current", formatCurrentData(data.current));
      } catch (error) {
        setError({ message: error.message || "Failed to fetch weather data." });
      }

      setIsFetching(false);
    }

    fetchWeatherData();
  }, []);

  return (
    <>
      <Header></Header>
      {!isFetching ? (
        <WeatherContent></WeatherContent>
      ) : (
        <p>Fetching Weather Data...</p>
      )}
    </>
  );
}
//OPEN METEO API
export default App;
