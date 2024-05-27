import HourlyForecastItem from "./HourlyForecastItem";
import { useContext } from "react";
import { WeatherContext } from "../store/WeatherContext";
import { dateFromDatetime, formatDate } from "../util/formatData";
import { motion, AnimatePresence } from "framer-motion";

export default function HourlyForecast() {
  const { hourly, selectedDay } = useContext(WeatherContext);

  function filterHours() {
    const hours = hourly.filter(
      (item) =>
        dateFromDatetime(item.time) === dateFromDatetime(selectedDay.time)
    );

    return hours.map((item) => (
      <HourlyForecastItem key={item.time} item={item}></HourlyForecastItem>
    ));
  }

  const filteredHours = filterHours();
  return (
    <div id="hourly-forecast">
      <AnimatePresence mode="wait">
        <motion.h3
          key={"hourlyHeader" + selectedDay.time}
          animate={{ opacity: [0, 1], filter: "blur(0px)" }}
          initial={{ opacity: [1, 0], filter: "blur(5px)" }}
          //exit={{ opacity: [1, 0], x: [0, -100] }}
          transition={{ duration: 0.15 }}
          className="hourly-header"
        >
          {Object.keys(selectedDay).length > 0
            ? formatDate(selectedDay.time)
            : "Today"}
        </motion.h3>
      </AnimatePresence>
      <AnimatePresence mode="popLayout">
        {hourly && (
          <motion.ul
            key={"hourlyList" + selectedDay.time}
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
            }}
            initial="hidden"
            animate="visible"
            //exit="hidden"
            id="hourly-forecast-list"
          >
            {filteredHours}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
