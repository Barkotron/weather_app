import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import TodayForecast from "./TodayForecast";

export default function WeatherContent({hourlyData, dailyData, currentData}) {
  return (
    <div id="weather-content">
      <DailyForecast dailyData={dailyData}></DailyForecast>
      <HourlyForecast hourlyData={hourlyData}></HourlyForecast>
      <TodayForecast currentData={currentData}></TodayForecast>
    </div>
  );
}
