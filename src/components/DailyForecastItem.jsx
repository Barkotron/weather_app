export default function DailyForecastItem({ item }) {
  return (
    <div className="daily-forecast-item">
      <h3>{item.dayOfWeek}</h3>
      <p>{item.time}</p>
      <p style={{fontSize: '10px'}}>{item.date}</p>
      <p>
        {item.high}° / {item.low}°
      </p>
    </div>
  );
}
