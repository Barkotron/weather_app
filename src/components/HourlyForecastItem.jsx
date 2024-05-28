import { hoursFromDatetime } from "../util/formatData";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "react-lottie";



export default function HourlyForecastItem({ item }) {



  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: item.conditionIcon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


  return (
    <AnimatePresence>
      <motion.li
        className="hourly-forecast-item"
        layout
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        //exit={{ opacity: [1, 0], x: [0, -100] }}
        transition={{ type: "spring", bounce: 0.45, duration: 0.65 }}
      >
        <p style={{ textAlign: "left", paddingLeft: "16px" }}>
          {hoursFromDatetime(item.time)}
        </p>
        <p style={{ textAlign: "center", fontWeight: "600" }}>{item.temp}°</p>
        <div className="hourly-forcast-lottie">
          <Lottie options={defaultOptions} width={40} height={40}></Lottie>
        </div>
        <p style={{ textAlign: "center", fontWeight: "600" }}>{item.precipitationChance}%</p>

        <p style={{ textAlign: "right", paddingRight: "16px" }}>
          {item.condition}
        </p>
      </motion.li>
    </AnimatePresence>
  );
}
