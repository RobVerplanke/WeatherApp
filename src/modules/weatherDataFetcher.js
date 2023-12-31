/* eslint-disable no-useless-catch */

import { format, parseISO } from 'date-fns';

// Function that filters the required data
function formatWeatherData(data) {
  const formattedData = {
    location: data.location.name,
    currentConditionText: data.current.condition.text,
    currentConditionIcon: data.current.condition.icon,
    currentTemp_c: data.current.temp_c,
    forecastDay1Title: data.forecast.forecastday[1].date,
    forecastDay2Title: data.forecast.forecastday[2].date,
    forecastDay3Title: data.forecast.forecastday[3].date,
    forecastDay1Icon: data.forecast.forecastday[1].day.condition.icon,
    forecastDay2Icon: data.forecast.forecastday[2].day.condition.icon,
    forecastDay3Icon: data.forecast.forecastday[3].day.condition.icon,
    forecastDay1Text: data.forecast.forecastday[1].day.condition.text,
    forecastDay2Text: data.forecast.forecastday[2].day.condition.text,
    forecastDay3Text: data.forecast.forecastday[3].day.condition.text,
    forecastDay1Temp_c: data.forecast.forecastday[1].day.maxtemp_c,
    forecastDay2Temp_c: data.forecast.forecastday[2].day.maxtemp_c,
    forecastDay3Temp_c: data.forecast.forecastday[3].day.maxtemp_c,
  };

  formattedData.forecastDay1Title = format(parseISO(data.forecast.forecastday[1].date), 'eeee');
  formattedData.forecastDay2Title = format(parseISO(data.forecast.forecastday[2].date), 'eeee');
  formattedData.forecastDay3Title = format(parseISO(data.forecast.forecastday[3].date), 'eeee');

  return formattedData;
}

// Function to fetch all data
export default async function fetchWeather(location) {
  const apiKey = '106cea8e9d704e439de122930230708';
  const forecastDays = 4;
  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=${forecastDays}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const weatherData = await response.json();

    // return formatted weatherData;
    return formatWeatherData(weatherData);
  } catch (error) {
    throw error;
  }
}
