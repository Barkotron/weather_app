export default function DailyForecastItem({ day, temp, high, low }) {
  return (
    <div className="daily-forecast-item">
      <h3>{day}</h3>
      <p>
        {high}° / {low}°
      </p>
    </div>
  );
}
