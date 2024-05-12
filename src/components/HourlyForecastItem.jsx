export default function HourlyForecastItem({ item }) {
  return (
    <div className="hourly-forecast-item">
      <p style={{ textAlgin: "left" }}>{item.time}</p>
      <p style={{ textAlgin: "center" }}>{item.temp}°</p>
      <p style={{ textAlgin: "right" }}>{item.condition}</p>
    </div>
  );
}
