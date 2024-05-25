import DailyForecastItem from "./DailyForecastItem";
import { useContext } from "react";
import { WeatherContext } from "../store/WeatherContext";
import { motion } from "framer-motion";

export default function DailyForecast() {
  const { daily, setSelectedDay } = useContext(WeatherContext);
  return (
    <div id="daily-forecast">
      <motion.ul id="daily-forecast-list">
        {daily.map((item) => (
          <DailyForecastItem
            key={item.time}
            item={item}
            onClick={() => setSelectedDay(item)}
          ></DailyForecastItem>
        ))}
      </motion.ul>
    </div>
  );
}
