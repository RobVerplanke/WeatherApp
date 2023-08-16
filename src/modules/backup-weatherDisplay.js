/* eslint-disable max-len */
import fetchWeather from './weatherDataFetcher';

const defaultLocation = 'Groningen';

function setElementsForecast(weatherData) {
  // Get all the text and icon containers
  const weatherForecastDay1 = document.querySelector('.weather-forecast__tomorrow');
  const forecastTitleDay1 = document.querySelector('.weather-forecast-tomorrow__title');
  const forecastIconDay1 = document.querySelector('.weather-forecast-tomorrow__icon');
  const forecastDescriptionDay1 = document.querySelector('.weather-forecast-tomorrow__desc');
  const forecastDegreesDay1 = document.querySelector('.weather-forecast-tomorrow__degrees');

  const weatherForecastDay2 = document.querySelector('.weather-forecast__2nd-day');
  const forecastTitleDay2 = document.querySelector('.weather-forecast-2nd-day__title');
  const forecastIconDay2 = document.querySelector('.weather-forecast-2nd-day__icon');
  const forecastDescriptionDay2 = document.querySelector('.weather-forecast-2nd-day__desc');
  const forecastDegreesDay2 = document.querySelector('.weather-forecast-2nd-day__degrees');

  const weatherForecastDay3 = document.querySelector('.weather-forecast__3rd-day');
  const forecastTitleDay3 = document.querySelector('.weather-forecast-3rd-day__title');
  const forecastIconDay3 = document.querySelector('.weather-forecast-3rd-day__icon');
  const forecastDescriptionDay3 = document.querySelector('.weather-forecast-3rd-day__desc');
  const forecastDegreesDay3 = document.querySelector('.weather-forecast-3rd-day__degrees');

  // Set corresponding icons for each day
  const iconDay1 = document.createElement('img');
  const iconUrlDay1 = `https:${weatherData.forecastDay1Icon}`;
  iconDay1.src = iconUrlDay1;
  forecastIconDay1.append(iconDay1);

  const iconDay2 = document.createElement('img');
  const iconUrlDay2 = `https:${weatherData.forecastDay2Icon}`;
  iconDay2.src = iconUrlDay2;
  forecastIconDay2.append(iconDay2);

  const iconDay3 = document.createElement('img');
  const iconUrlDay3 = `https:${weatherData.forecastDay3Icon}`;
  iconDay3.src = iconUrlDay3;
  forecastIconDay3.append(iconDay3);

  // Set the day(title) of the forecast
  forecastTitleDay1.innerHTML = weatherData.forecastDay1Title;
  forecastTitleDay2.innerHTML = weatherData.forecastDay2Title;
  forecastTitleDay3.innerHTML = weatherData.forecastDay3Title;

  // Set the forecast description for each day
  forecastDescriptionDay1.innerHTML = weatherData.forecastDay1Text;
  forecastDescriptionDay2.innerHTML = weatherData.forecastDay2Text;
  forecastDescriptionDay3.innerHTML = weatherData.forecastDay3Text;

  // Set the forecast temperature for each day
  forecastDegreesDay1.innerHTML = `${weatherData.forecastDay1Temp} ℃`;
  forecastDegreesDay2.innerHTML = `${weatherData.forecastDay2Temp} ℃`;
  forecastDegreesDay3.innerHTML = `${weatherData.forecastDay3Temp} ℃`;

  // Append content to the content containers
  weatherForecastDay1.append(forecastTitleDay1, forecastIconDay1, forecastDescriptionDay1, forecastDegreesDay1);
  weatherForecastDay2.append(forecastIconDay2, forecastDescriptionDay2, forecastDegreesDay2);
  weatherForecastDay3.append(forecastIconDay3, forecastDescriptionDay3, forecastDegreesDay3);

//   console.log(weatherData);
}

function setElementsTodaysWeather(weatherData) {
  const todaysWeatherTitle = document.querySelector('.content__title');
  const todaysWeatherHolder = document.querySelector('.content__weather-today');
  const todaysWeatherIcon = document.querySelector('.weather-today__icon');
  const todaysWeatherDescription = document.querySelector('.weather-today__desc');
  const todaysWeatherDegrees = document.querySelector('.weather-today__degrees');

  todaysWeatherTitle.innerHTML = `<h1>Today's weather in ${weatherData.location}</h1>`;

  const icon = document.createElement('img');
  const iconUrl = `https:${weatherData.currentConditionIcon}`;
  icon.src = iconUrl;
  icon.classList.add('weather-icon');
  todaysWeatherIcon.append(icon);

  todaysWeatherDescription.innerHTML = weatherData.currentConditionText;
  todaysWeatherDegrees.innerHTML = `${weatherData.currentTemp_c} ℃`;

  todaysWeatherHolder.append(todaysWeatherIcon, todaysWeatherDescription, todaysWeatherDegrees);

  setElementsForecast(weatherData);
}

function clearIcons() {
  const todaysWeatherIcon = document.querySelector('.weather-today__icon');
  const forecastIconDay1 = document.querySelector('.weather-forecast-tomorrow__icon');
  const forecastIconDay2 = document.querySelector('.weather-forecast-2nd-day__icon');
  const forecastIconDay3 = document.querySelector('.weather-forecast-3rd-day__icon');

  todaysWeatherIcon.innerHTML = '';
  forecastIconDay1.innerHTML = '';
  forecastIconDay2.innerHTML = '';
  forecastIconDay3.innerHTML = '';
}

export async function setDefaultData() {
  const weatherData = await fetchWeather(defaultLocation);
  setElementsTodaysWeather(weatherData);
}

export async function setUserData(location) {
  const weatherData = await fetchWeather(location);
  clearIcons();
  setElementsTodaysWeather(weatherData);
}

// Get form elements
export function getFormElements() {
  const searchBar = document.querySelector('#search-location');
  const submitButton = document.querySelector('#search-submit');

  return { searchBar, submitButton };
}
