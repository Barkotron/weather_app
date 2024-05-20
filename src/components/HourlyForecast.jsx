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
      <p style={{ textAlign: "left", paddingLeft: "16px" }}>
        {Object.keys(selectedDay).length > 0
          ? formatDate(selectedDay.time)
          : "Today"}
      </p>
      {hourly && <ul id="hourly-forecast-list">{filterHours()};</ul>}
    </div>
  );
}
