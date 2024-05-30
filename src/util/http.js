//import { useContext } from "react";
//import { WeatherContext } from "../store/WeatherContext";

export async function fetchWeather() {

  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=49.8844&longitude=-97.147&current=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,apparent_temperature,precipitation_probability,precipitation,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=auto"
  );
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  return resData;
}

export async function refreshWeather(weatherCtx)
{
  //const weatherCtx = useContext(WeatherContext);

  try {
    const data = await fetchWeather();
    console.log("all data", data);

    /* set up context */
    weatherCtx.setDaily(data.daily);
    weatherCtx.setHourly(data.hourly);
    weatherCtx.setCurrent(data.current);
    weatherCtx.setLocation(data.timezone);

    console.log("hourly", weatherCtx.hourly);
    console.log("daily", weatherCtx.daily);
    console.log("current", weatherCtx.today);
  } catch (error) {
    //setError({ message: error.message || "Failed to fetch weather data." });
  }
}
