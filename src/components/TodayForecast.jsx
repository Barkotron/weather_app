import { useContext } from "react";
import { WeatherContext } from "../store/WeatherContext";
import { formatDateTime } from "../util/formatData";

export default function TodayForecast() {
  const { today } = useContext(WeatherContext);

  return (
    <div id="today-forecast">
      <div className="today-header">
        <h3 style={{ margin: "0" }}>Winnipeg</h3>
        <p style={{ margin: "0" }}>{formatDateTime(today.time)}</p>
      </div>

      <div className="today-temp-conditions">
        <div className="today-temp">
          <p>{today.temp}°</p>
        </div>

        <div className="today-conditions">
          <p>Feels like {today.feelsLike}°</p>
          <p> High° / Low° </p>
          <p>{today.condition}</p>
        </div>
      </div>
    </div>
  );
}
