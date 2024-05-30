import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import TodayForecast from "./TodayForecast";

export default function WeatherContent() {

  return (
    <div id="weather-content">
      <TodayForecast></TodayForecast>
      <DailyForecast></DailyForecast>
      <HourlyForecast></HourlyForecast>
    </div>
  );
}
