import { useContext } from "react";
import { WeatherContext } from "../store/WeatherContext";

export default function TodayForecast() {
  const { today } = useContext(WeatherContext);

  return (
    <div id="today-forecast">
      <h3>{today.time}</h3>
      <p>{today.temp}°</p>
      <p>Feels like {today.feelsLike}°</p>
      <p>{today.condition}</p>
    </div>
  );
}
