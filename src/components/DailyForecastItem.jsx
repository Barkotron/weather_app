import { motion } from "framer-motion";
export default function DailyForecastItem({ item, onClick }) {
  return (
    <motion.li
      key={item.time}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="daily-forecast-item"
      onClick={onClick}
    >
      <h3>{item.dayOfWeek}</h3>
      <p className="daily-forecast-date">{item.time}</p>
      <p className="daily-forecast-temp">
        {item.high}° / {item.low}°
      </p>
    </motion.li>
  );
}
