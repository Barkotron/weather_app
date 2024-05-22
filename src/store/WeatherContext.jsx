import { createContext, useReducer } from "react";
import {
  formatHourlyData,
  formatDailyData,
  formatCurrentData,
  formatLocation,
} from "../util/formatData";

export const WeatherContext = createContext({
  today: [],
  daily: [],
  hourly: [],
  selectedDay: {},
  unit: "C",
  location: "",
  setDaily: () => {},
  setHourly: () => {},
  setCurrent: () => {},
  setLocation: () => {},
  setSelectedDay: () => {},
});

function weatherReducer(state, action) {
  if (action.type === "SET_DAILY") {
    const dailyWeatherFormatted = formatDailyData(action.payload);
    return { ...state, daily: dailyWeatherFormatted, selectedDay: dailyWeatherFormatted[0] };
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

  if (action.type === "SET_LOCATION") {
    const locationFormatted = formatLocation(action.payload);
    return { ...state, location: locationFormatted };
  }

  if (action.type === "SET_SELECTED") {
    return { ...state, selectedDay: action.payload };
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
    location: "",
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

  function handleSetLocation(currentLocation) {
    weatherDispatch({
      type: "SET_LOCATION",
      payload: currentLocation,
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

  function handleSetSelectedDay(day) {
    weatherDispatch({
      type: "SET_SELECTED",
      payload: day,
    });
  }

  const ctxValue = {
    today: weatherState.today,
    daily: weatherState.daily,
    hourly: weatherState.hourly,
    unit: weatherState.unit,
    selectedDay: weatherState.selectedDay,
    location: weatherState.location,
    setDaily: handleSetDailyWeather,
    setHourly: handleSetHourlyWeather,
    setCurrent: handleSetCurrentWeather,
    setLocation: handleSetLocation,
    setSelectedDay: handleSetSelectedDay,
  };

  return (
    <WeatherContext.Provider value={ctxValue}>
      {children}
    </WeatherContext.Provider>
  );
}
