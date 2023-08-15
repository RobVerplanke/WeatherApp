/* eslint-disable max-len */
import fetchWeather from './weatherDataFetcher';

function setElementsForecast() {
  const weatherForecastDay1 = document.querySelector('.weather-forecast__tomorrow');
  const forecastIconDay1 = document.querySelector('.weather-forecast-tomorrow__icon');
  const forecastDescriptionDay1 = document.querySelector('.weather-forecast-tomorrow__desc');
  const forecastDegreesDay1 = document.querySelector('.weather-forecast-tomorrow__degrees');

  const weatherForecastDay2 = document.querySelector('.weather-forecast__2nd-day');
  const forecastIconDay2 = document.querySelector('.weather-forecast-2nd-day__icon');
  const forecastDescriptionDay2 = document.querySelector('.weather-forecast-2nd-day__desc');
  const forecastDegreesDay2 = document.querySelector('.weather-forecast-2nd-day__degrees');

  const weatherForecastDay3 = document.querySelector('.weather-forecast__3rd-day');
  const forecastIconDay3 = document.querySelector('.weather-forecast-3rd-day__icon');
  const forecastDescriptionDay3 = document.querySelector('.weather-forecast-3rd-day__desc');
  const forecastDegreesDay3 = document.querySelector('.weather-forecast-3rd-day__degrees');
}

function setElementsTodaysWeather(weatherData, location) {
  const todaysWeatherTitle = document.querySelector('.content__title');
  const todaysWeatherHolder = document.querySelector('.content__weather-today');
  const todaysWeatherIcon = document.querySelector('.weather-today__icon');
  const todaysWeatherDescription = document.querySelector('.weather-today__desc');
  const todaysWeatherDegrees = document.querySelector('.weather-today__degrees');

  todaysWeatherTitle.innerHTML = `<h1>Today's weather in ${location}</h1>`;

  const icon = document.createElement('img');
  const iconUrl = `https:${weatherData.current.condition.icon}`;
  icon.src = iconUrl;
  icon.classList.add('weather-icon');

  todaysWeatherIcon.append(icon);
  todaysWeatherDescription.innerHTML = weatherData.current.condition.text;
  todaysWeatherDegrees.innerHTML = `${weatherData.current.temp_c} ℃`;

  todaysWeatherHolder.append(todaysWeatherIcon, todaysWeatherDescription, todaysWeatherDegrees);

  setElementsForecast();
}

export default async function setDefaultData() {
  const defaultLocation = 'Groningen';
  const weatherData = await fetchWeather(defaultLocation);

  setElementsTodaysWeather(weatherData, defaultLocation);
}
