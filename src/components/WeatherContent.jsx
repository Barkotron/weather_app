import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import TodayForecast from "./TodayForecast";

export default function WeatherContent({hourlyData, dailyData}) {
  return (
    <div id="weather-content">
      <DailyForecast dailyData={dailyData}></DailyForecast>
      <HourlyForecast hourlyData={hourlyData}></HourlyForecast>
      <TodayForecast></TodayForecast>
    </div>
  );
}
