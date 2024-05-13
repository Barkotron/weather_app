export default function TodayForecast({ currentData }) {
  return (
    <div id="today-forecast">
      <h3>{currentData.time}</h3>
      <p>{currentData.temp}°</p>
      <p>Feels like {currentData.feelsLike}°</p>
      <p>{currentData.condition}</p>
    </div>
  );
}
