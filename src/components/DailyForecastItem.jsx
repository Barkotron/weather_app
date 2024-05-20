export default function DailyForecastItem({ item, onClick }) {
  return (
    <div className="daily-forecast-item" onClick={onClick}>
      <h3>{item.dayOfWeek}</h3>
      <p className="daily-forecast-date">{item.time}</p>
      <p className="daily-forecast-temp">
        {item.high}° / {item.low}°
      </p>
    </div>
  );
}
