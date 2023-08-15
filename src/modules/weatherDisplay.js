/* eslint-disable max-len */
import fetchWeather from './weatherDataFetcher';

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
  const iconUrlDay1 = `https:${weatherData.forecast.forecastday[1].day.condition.icon}`;
  iconDay1.src = iconUrlDay1;
  forecastIconDay1.append(iconDay1);

  const iconDay2 = document.createElement('img');
  const iconUrlDay2 = `https:${weatherData.forecast.forecastday[2].day.condition.icon}`;
  iconDay2.src = iconUrlDay2;
  forecastIconDay2.append(iconDay2);

  const iconDay3 = document.createElement('img');
  const iconUrlDay3 = `https:${weatherData.forecast.forecastday[3].day.condition.icon}`;
  iconDay3.src = iconUrlDay3;
  forecastIconDay3.append(iconDay3);

  // Set the day(title) of the forecast
  forecastTitleDay1.innerHTML = weatherData.forecast.forecastday[1].date;
  forecastTitleDay2.innerHTML = weatherData.forecast.forecastday[2].date;
  forecastTitleDay3.innerHTML = weatherData.forecast.forecastday[3].date;

  // Set the forecast description for each day
  forecastDescriptionDay1.innerHTML = weatherData.forecast.forecastday[1].day.condition.text;
  forecastDescriptionDay2.innerHTML = weatherData.forecast.forecastday[2].day.condition.text;
  forecastDescriptionDay3.innerHTML = weatherData.forecast.forecastday[3].day.condition.text;

  // Set the forecast temperature for each day
  forecastDegreesDay1.innerHTML = `${weatherData.forecast.forecastday[1].day.avgtemp_c} ℃`;
  forecastDegreesDay2.innerHTML = `${weatherData.forecast.forecastday[2].day.avgtemp_c} ℃`;
  forecastDegreesDay3.innerHTML = `${weatherData.forecast.forecastday[3].day.avgtemp_c} ℃`;

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

  todaysWeatherTitle.innerHTML = `<h1>Today's weather in ${weatherData.location.name}</h1>`;

  const icon = document.createElement('img');
  const iconUrl = `https:${weatherData.current.condition.icon}`;
  icon.src = iconUrl;
  icon.classList.add('weather-icon');
  todaysWeatherIcon.append(icon);

  todaysWeatherDescription.innerHTML = weatherData.current.condition.text;
  todaysWeatherDegrees.innerHTML = `${weatherData.current.temp_c} ℃`;

  todaysWeatherHolder.append(todaysWeatherIcon, todaysWeatherDescription, todaysWeatherDegrees);

  setElementsForecast(weatherData);
}

export default async function setDefaultData() {
  const defaultLocation = 'Groningen';
  const weatherData = await fetchWeather(defaultLocation);

  setElementsTodaysWeather(weatherData);
}
