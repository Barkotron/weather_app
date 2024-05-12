import DailyForecastItem from "./DailyForecastItem";

export default function DailyForecast({dailyData}) {
  return (
    <div id="daily-forecast">
      <ul id="daily-forecast-list">
        {dailyData.map((item) => (
          <DailyForecastItem item={item}></DailyForecastItem>
        ))}
      </ul>
    </div>
  );
}
