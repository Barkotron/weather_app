import { useContext } from "react";
import { WeatherContext } from "../store/WeatherContext";
import { refreshWeather } from "../util/http";

export default function Header() {

  const weatherCtx = useContext(WeatherContext);
  return (
    <div id="header">
      <header >
        <h1>Weather App</h1>
      </header>
      <button onClick={() => refreshWeather(weatherCtx)}>Refresh</button>
    </div>
  );
}
