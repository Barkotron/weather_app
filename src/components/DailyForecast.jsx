import DailyForecastItem from "./DailyForecastItem";
import { useContext } from "react";
import { WeatherContext } from "../store/WeatherContext";

export default function DailyForecast() {
  const {daily, setSelectedDay} = useContext(WeatherContext);
  return (
    <div id="daily-forecast">
      <ul id="daily-forecast-list">
        {daily.map((item) => (
          <DailyForecastItem key={item.time} item={item} onClick={() => setSelectedDay(item)}></DailyForecastItem>
        ))}
      </ul>
    </div>
  );
}
