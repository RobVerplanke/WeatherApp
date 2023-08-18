/* eslint-disable no-plusplus */
/* eslint-disable no-useless-catch */

import { format, parseISO } from 'date-fns';

// Function that filters the required data
function formatWeatherData(data) {
  const formattedData = {
    location: data.location.name,
    currentConditionText: data.current.condition.text,
    currentConditionIcon: data.current.condition.icon,
    currentTemp_c: data.current.temp_c,
    currentTemp_f: data.current.temp_f,
    forecastDays: [], // Initialize forecastDays array
  };

  for (let i = 0; i <= 3; i++) {
    const forecastDay = data.forecast.forecastday[i];

    // Initialize forecastDays[i] as an empty array if it's undefined
    if (!formattedData.forecastDays[i]) {
      formattedData.forecastDays[i] = [];
    }

    formattedData.forecastDays[i].push({
      title: format(parseISO(forecastDay.date), 'eeee'),
      icon: forecastDay.day.condition.icon,
      text: forecastDay.day.condition.text,
      temp_c: forecastDay.day.maxtemp_c,
      temp_f: forecastDay.day.maxtemp_f,

    });
  }

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

    // Format received data
    return formatWeatherData(weatherData);
  } catch (error) {
    throw error;
  }
}
