import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import TodayForecast from "./TodayForecast";

import { useContext } from "react";
import { WeatherContext } from "../store/WeatherContext";
import { refreshWeather } from "../util/http";

export default function WeatherContent() {

  const weatherCtx = useContext(WeatherContext);
  return (
    <div id="weather-content">
      <button onClick={() => refreshWeather(weatherCtx)}>Refresh</button>
      <TodayForecast></TodayForecast>
      <DailyForecast></DailyForecast>
      <HourlyForecast></HourlyForecast>
    </div>
  );
}
