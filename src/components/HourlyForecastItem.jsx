import { hoursFromDatetime } from "../util/formatData";

export default function HourlyForecastItem({ item }) {
  return (
    <div className="hourly-forecast-item">
      <p style={{ textAlign: "left", paddingLeft: "16px" }}>{hoursFromDatetime(item.time)}</p>
      <p style={{ textAlign: "center" }}>{item.temp}°</p>
      <p style={{ textAlign: "right", paddingRight: "16px"}}>{item.condition}</p>
    </div>
  );
}
