import "./App.css";
import Header from "./components/Header";
import WeatherContent from "./components/WeatherContent";
import { fetchWeather } from "./util/http";
import { useEffect, useState } from "react";
import { formatHourlyData, formatDailyData } from "./util/formatData";

function App() {
  const [hourlyWeather, setHourlyWeather] = useState([]);
  const [formattedHourlyWeather, setFormattedHourlyWeather] = useState([]);
  const [formattedDailyWeather, setFormattedDailyWeather] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchWeatherData() {
      setIsFetching(true);
      try {
        const data = await fetchWeather();
        console.log("all data", data);
        setHourlyWeather(data);
        setFormattedHourlyWeather(formatHourlyData(data.hourly));
        setFormattedDailyWeather(formatDailyData(data.daily));
        console.log("hourly", formatHourlyData(data.hourly));
        console.log("daily", formatDailyData(data.daily));
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
      {!isFetching ? <WeatherContent hourlyData={formattedHourlyWeather} dailyData={formattedDailyWeather}></WeatherContent> : <p>Fetching Weather Data...</p>}
    </>
  );
}
//OPEN METEO API
export default App;
