import HourlyForecastItem from "./HourlyForecastItem";
//import { HOURLY_DATA } from "../store/Data.js";

//const hourlyData = HOURLY_DATA;

export default function HourlyForecast({ hourlyData }) {
  return (
    <div id="hourly-forecast">
      {hourlyData && <ul id="hourly-forecast-list">
        {hourlyData.map((item) => (
          <HourlyForecastItem key={item.time} item={item}></HourlyForecastItem>
        ))}
      </ul>}
    </div>
  );
}
