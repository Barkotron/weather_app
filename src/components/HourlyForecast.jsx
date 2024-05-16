import HourlyForecastItem from "./HourlyForecastItem";
import { useContext } from "react";
import { WeatherContext } from "../store/WeatherContext";

export default function HourlyForecast() {
  const { hourly } = useContext(WeatherContext);
  return (
    <div id="hourly-forecast">
      {hourly && (
        <ul id="hourly-forecast-list">
          {hourly.map((item) => (
            <HourlyForecastItem
              key={item.time}
              item={item}
            ></HourlyForecastItem>
          ))}
        </ul>
      )}
    </div>
  );
}
