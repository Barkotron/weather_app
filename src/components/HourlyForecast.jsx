import HourlyForecastItem from "./HourlyForecastItem";
import { useContext } from "react";
import { WeatherContext } from "../store/WeatherContext";
import { dateFromDatetime, formatDate } from "../util/formatData";

export default function HourlyForecast() {
  const { hourly, selectedDay } = useContext(WeatherContext);

  function filterHours() {
    const hours = hourly.filter(
      (item) =>
        dateFromDatetime(item.time) === dateFromDatetime(selectedDay.time)
    );

    return hours.map((item) => (
      <HourlyForecastItem key={item.time} item={item}></HourlyForecastItem>
    ));
  }

  return (
    <div id="hourly-forecast">
      <h3 className="hourly-header">
        {Object.keys(selectedDay).length > 0
          ? formatDate(selectedDay.time)
          : "Today"}
      </h3>
      {hourly && <ul id="hourly-forecast-list">{filterHours()}</ul>}
    </div>
  );
}
