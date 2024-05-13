const WEATHER_CODES = {
  0: "Clear",
  1: "Mostly Clear",
  2: "Partly Cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Fog",
  51: "Light Drizzle",
  52: "Moderate Drizzle",
  53: "Heavy Drizzle",
  56: "Freezing Drizzle", //light
  57: "Freezing Drizzle", //heavy
  61: "Slight Rain",
  62: "Moderate Rain",
  63: "Heavy Rain",
  66: "Freezing Rain", //light
  67: "Freezing Rain", //heavy
  71: "Light Snow",
  72: "Moderate Snow",
  73: "Heavy Snow",
  77: "Snow Grains",
  80: "Rain Shower",
  81: "Moderate Rain Shower",
  82: "Heavy Rain Shower",
  85: "Light Snow Shower",
  86: "Heavy Snow Shower",
  95: "Light Thunderstorm",
  96: "Thunderstorm with Hail", //light
  99: "Thunderstorm with Hail", //heavy
};

const DAYS = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

export function formatHourlyData(data) {
  let hours = [];
  for (let i = 0; i < data.apparent_temperature.length; i++) {
    const date = new Date(data.time[i]);

    const hour = {
      time: data.time[i],
      feelsLike: data.apparent_temperature[i],
      precipitationChance: Math.round(data.precipitation_probability[i]),
      temp: Math.round(data.temperature_2m[i]),
      condition: WEATHER_CODES[data.weather_code[i]],
    };

    hours.push(hour);
  }

  return hours;
}

export function formatDailyData(data) {
  let days = [];
  for (let i = 0; i < data.temperature_2m_max.length; i++) {
    const day = {
      dayOfWeek: DAYS[new Date(data.time[i]).getDay()],
      time: data.time[i],
      high: Math.round(data.temperature_2m_max[i]),
      low: Math.round(data.temperature_2m_min[i]),
    };
    days.push(day);
  }
  return days;
}

export function formatCurrentData(data) {
  const current = {
    feelsLike: Math.round(data.apparent_temperature),
    temp: Math.round(data.temperature_2m),
    time: data.time,
    condition: WEATHER_CODES[data.weather_code],
  };

  return current;
}
