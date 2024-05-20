import { createContext, useReducer } from "react";
import {
  formatHourlyData,
  formatDailyData,
  formatCurrentData,
} from "../util/formatData";

export const WeatherContext = createContext({
  today: [],
  daily: [],
  hourly: [],
  selectedDay: {},
  unit: "C",
  setDaily: () => {},
  setHourly: () => {},
  setCurrent: () => {},
});

function weatherReducer(state, action) {
  if (action.type === "SET_DAILY") {
    const dailyWeatherFormatted = formatDailyData(action.payload);
    return { ...state, daily: dailyWeatherFormatted };
  }

  if (action.type === "SET_HOURLY") {
    const hourlyWeatherFormatted = formatHourlyData(action.payload);

    return { ...state, hourly: hourlyWeatherFormatted };
  }

  if (action.type === "SET_CURRENT") {
    const currentWeatherFormatted = formatCurrentData(action.payload);

    return { ...state, today: currentWeatherFormatted };
  }

  if (action.type === "CHANGE_DAY") {
    return state;
  }

  return state;
}

export default function WeatherContextProvider({ children }) {
  const [weatherState, weatherDispatch] = useReducer(weatherReducer, {
    today: [],
    daily: [],
    hourly: [],
    selectedDay: {},
    unit: "C",
  });

  function handleChangeDay(id) {
    weatherDispatch({
      type: "CHANGE_DAY",
      payload: id,
    });
  }

  function handleSetDailyWeather(dailyWeather) {
    weatherDispatch({
      type: "SET_DAILY",
      payload: dailyWeather,
    });
  }

  function handleSetHourlyWeather(hourlyWeather) {
    weatherDispatch({
      type: "SET_HOURLY",
      payload: hourlyWeather,
    });
  }

  function handleSetCurrentWeather(currentWeather) {
    weatherDispatch({
      type: "SET_CURRENT",
      payload: currentWeather,
    });
  }

  const ctxValue = {
    today: weatherState.today,
    daily: weatherState.daily,
    hourly: weatherState.hourly,
    unit: weatherState.unit,
    selectedDay: weatherState.selectedDay,
    setDaily: handleSetDailyWeather,
    setHourly: handleSetHourlyWeather,
    setCurrent: handleSetCurrentWeather,
  };

  return (
    <WeatherContext.Provider value={ctxValue}>
      {children}
    </WeatherContext.Provider>
  );
}
