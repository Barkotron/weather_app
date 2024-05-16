import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import TodayForecast from "./TodayForecast";

export default function WeatherContent() {
  return (
    <div id="weather-content">
      <DailyForecast></DailyForecast>
      <HourlyForecast></HourlyForecast>
      <TodayForecast></TodayForecast>
    </div>
  );
}
