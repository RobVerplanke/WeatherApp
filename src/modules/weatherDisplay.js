/* eslint-disable no-plusplus */
// Select the searchbar and the submit button
export function getFormElements() {
  const searchBar = document.querySelector('#search-location');
  const submitButton = document.querySelector('#search-submit');
  const temperatureToggle = document.getElementById('temperature-toggle');

  return { searchBar, submitButton, temperatureToggle };
}

function getIconContainers() {
  const todaysWeatherIcon = document.querySelector('.weather-today__icon');
  const forecastIconDay1 = document.querySelector('.weather-forecast-day-1__icon');
  const forecastIconDay2 = document.querySelector('.weather-forecast-day-2__icon');
  const forecastIconDay3 = document.querySelector('.weather-forecast-day-3__icon');

  return {
    todaysWeatherIcon, forecastIconDay1, forecastIconDay2, forecastIconDay3,
  };
}

export function clearIconContainers() {
  const {
    todaysWeatherIcon, forecastIconDay1, forecastIconDay2, forecastIconDay3,
  } = getIconContainers();

  todaysWeatherIcon.innerHTML = '';
  forecastIconDay1.innerHTML = '';
  forecastIconDay2.innerHTML = '';
  forecastIconDay3.innerHTML = '';
}

// Select all 'today's weather' content holders
function getElementsTodaysWeather() {
  const todaysWeatherHolder = document.querySelector('.content__weather-today');
  const todaysWeatherIcon = document.querySelector('.weather-today__icon');
  const todaysWeatherTitle = document.querySelector('.content__title');
  const todaysWeatherDescription = document.querySelector('.weather-today__desc');
  const todaysWeatherDegrees = document.querySelector('.weather-today__degrees');

  return {
    todaysWeatherHolder,
    todaysWeatherIcon,
    todaysWeatherTitle,
    todaysWeatherDescription,
    todaysWeatherDegrees,
  };
}

// Select content holders in forecast section for day 1
function getElementsForecast(dayIndex) {
  const weatherForecast = document.querySelector(`.weather-forecast__day-${dayIndex}`);
  const forecastTitle = document.querySelector(`.weather-forecast-day-${dayIndex}__title`);
  const forecastIcon = document.querySelector(`.weather-forecast-day-${dayIndex}__icon`);
  const forecastDescription = document.querySelector(`.weather-forecast-day-${dayIndex}__desc`);
  const forecastDegrees = document.querySelector(`.weather-forecast-day-${dayIndex}__degrees`);

  return {
    weatherForecast,
    forecastTitle,
    forecastIcon,
    forecastDescription,
    forecastDegrees,
  };
}

// Create and return a new icon
function createIcon(url, addClass) {
  const icon = document.createElement('img');
  const iconUrl = `https:${url}`;

  icon.src = iconUrl;
  icon.classList.add(addClass);

  return icon;
}

// Set all corresponding content in 'today's weather' section
export function setElementsTodaysWeather(weatherData) {
  const TodaysWeatherElements = getElementsTodaysWeather();

  // Set the content of todays weather
  TodaysWeatherElements.todaysWeatherTitle.innerHTML = `<h1>Today's weather in ${weatherData.location}</h1>`;
  TodaysWeatherElements.todaysWeatherIcon.append(createIcon(weatherData.currentConditionIcon, 'weather-today__icon'));
  TodaysWeatherElements.todaysWeatherDescription.innerHTML = weatherData.currentConditionText;
  TodaysWeatherElements.todaysWeatherDegrees.innerHTML = `${weatherData.currentTemp_c} ℃`;

  // Append content to the content containers
  TodaysWeatherElements.todaysWeatherHolder.append(
    TodaysWeatherElements.todaysWeatherIcon,
    TodaysWeatherElements.todaysWeatherDescription,
    TodaysWeatherElements.todaysWeatherDegrees,
  );
}

// Set all corresponding content in the forecast section
export function setElementsForecast(dayIndex, weatherData) {
  const ForecastElements = getElementsForecast(dayIndex);

  ForecastElements.forecastTitle.innerHTML = weatherData.forecastDays[dayIndex][0].title;
  ForecastElements.forecastIcon.append(createIcon(weatherData.forecastDays[dayIndex][0].icon));
  ForecastElements.forecastDescription.innerHTML = weatherData.forecastDays[dayIndex][0].text;
  ForecastElements.forecastDegrees.innerHTML = weatherData.forecastDays[dayIndex][0].temp_c;

  ForecastElements.weatherForecast.append(
    ForecastElements.forecastTitle,
    ForecastElements.forecastIcon,
    ForecastElements.forecastDescription,
    ForecastElements.forecastDegrees,
  );
}

export function setNewContent(formattedData) {
  setElementsTodaysWeather(formattedData);

  for (let dayIndex = 1; dayIndex <= 3; dayIndex++) {
    setElementsForecast(dayIndex, formattedData);
  }
}
