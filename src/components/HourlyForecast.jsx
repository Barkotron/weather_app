import HourlyForecastItem from "./HourlyForecastItem";
import { HOURLY_DATA } from "../store/HourlyData";

const hourlyData = HOURLY_DATA;

export default function HourlyForecast() {
  return (
    <div id="hourly-forecast">
      <ul id="hourly-forecast-list">
        {hourlyData.map((item) => (
        <HourlyForecastItem item={item}></HourlyForecastItem>))}
      </ul>
    </div>
  );
}
