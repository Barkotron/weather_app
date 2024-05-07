import DailyForecastItem from "./DailyForecastItem";

export default function DailyForecast() {
  return (
    <div id="daily-forecast">
      <DailyForecastItem
        day="Monday"
        temp={32}
        high={35}
        low={28}
      ></DailyForecastItem>
      <DailyForecastItem
        day="Tuesday"
        temp={33}
        high={36}
        low={29}
      ></DailyForecastItem>
      <DailyForecastItem
        day="Wednesday"
        temp={28}
        high={29}
        low={26}
      ></DailyForecastItem>
      <DailyForecastItem
        day="Thursday"
        temp={30}
        high={35}
        low={30}
      ></DailyForecastItem>
      <DailyForecastItem
        day="Friday"
        temp={31}
        high={33}
        low={30}
      ></DailyForecastItem>
      <DailyForecastItem
        day="Saturday"
        temp={39}
        high={40}
        low={32}
      ></DailyForecastItem>
      <DailyForecastItem
        day="Sunday"
        temp={34}
        high={35}
        low={26}
      ></DailyForecastItem>
    </div>
  );
}
