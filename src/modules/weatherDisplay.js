/* eslint-disable max-len */
/* eslint-disable no-plusplus */
// Select the searchbar and the submit button

export function getFormElements() {
  const searchBar = document.querySelector('#search-location');
  const submitButton = document.querySelector('#search-submit');
  const temperatureToggle = document.getElementById('temperature-toggle');

  return { searchBar, submitButton, temperatureToggle };
}

// Select all icon containers
function getIconContainers() {
  const todaysWeatherIcon = document.querySelector('.weather-today__icon');
  const forecastIconDay1 = document.querySelector('.weather-forecast-day-1__icon');
  const forecastIconDay2 = document.querySelector('.weather-forecast-day-2__icon');

  return {
    todaysWeatherIcon, forecastIconDay1, forecastIconDay2,
  };
}

// Clear all icon containers
export function clearIconContainers() {
  const {
    todaysWeatherIcon, forecastIconDay1, forecastIconDay2,
  } = getIconContainers();

  todaysWeatherIcon.innerHTML = '';
  forecastIconDay1.innerHTML = '';
  forecastIconDay2.innerHTML = '';
}

function getTempScale() {
  const toggleCheckbox = document.querySelector('#temperature-toggle');
  const toggleStatus = toggleCheckbox.checked;

  return toggleStatus;
}

// Select all temperature containers
function getTempContainers() {
  const todaysTempContainer = document.querySelector('.weather-today__degrees');
  const forecastTempContainerDay1 = document.querySelector('.weather-forecast-day-1__degrees');
  const forecastTempContainerDay2 = document.querySelector('.weather-forecast-day-2__degrees');

  return {
    todaysTempContainer, forecastTempContainerDay1, forecastTempContainerDay2,
  };
}

export function getCurrentTempValues() {
  const tempContainers = getTempContainers();

  const todaysWeatherDegrees = tempContainers.todaysTempContainer.innerHTML;
  const forecastDegreesDay1 = tempContainers.forecastTempContainerDay1.innerHTML;
  const forecastDegreesDay2 = tempContainers.forecastTempContainerDay2.innerHTML;

  return {
    todaysWeatherDegrees,
    forecastDegreesDay1,
    forecastDegreesDay2,
  };
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
function setElementsTodaysWeather(weatherData) {
  const TodaysWeatherElements = getElementsTodaysWeather();

  // Set the content of todays weather
  TodaysWeatherElements.todaysWeatherTitle.innerHTML = `<h1>Today's weather in ${weatherData.location}</h1>`;
  TodaysWeatherElements.todaysWeatherIcon.append(createIcon(weatherData.currentConditionIcon, 'weather-today__icon'));
  TodaysWeatherElements.todaysWeatherDescription.innerHTML = weatherData.currentConditionText;

  if (getTempScale() === false) {
    TodaysWeatherElements.todaysWeatherDegrees.innerHTML = `${Math.round(weatherData.currentTemp_c)} °C`;
  } else {
    TodaysWeatherElements.todaysWeatherDegrees.innerHTML = `${Math.round(weatherData.currentTemp_f)} °F`;
  }

  // Append content to the content containers
  TodaysWeatherElements.todaysWeatherHolder.append(
    TodaysWeatherElements.todaysWeatherIcon,
    TodaysWeatherElements.todaysWeatherDescription,
    TodaysWeatherElements.todaysWeatherDegrees,
  );
}

// Set all corresponding content in the forecast section
function setElementsForecast(dayIndex, weatherData) {
  const ForecastElements = getElementsForecast(dayIndex);

  ForecastElements.forecastTitle.innerHTML = weatherData.forecastDays[dayIndex][0].title;
  ForecastElements.forecastIcon.append(createIcon(weatherData.forecastDays[dayIndex][0].icon));
  ForecastElements.forecastDescription.innerHTML = weatherData.forecastDays[dayIndex][0].text;

  if (getTempScale() === false) {
    ForecastElements.forecastDegrees.innerHTML = `${Math.round(weatherData.forecastDays[dayIndex][0].temp_c)} °C`;
  } else {
    ForecastElements.forecastDegrees.innerHTML = `${Math.round(weatherData.forecastDays[dayIndex][0].temp_f)} °F`;
  }

  ForecastElements.weatherForecast.append(
    ForecastElements.forecastTitle,
    ForecastElements.forecastIcon,
    ForecastElements.forecastDescription,
    ForecastElements.forecastDegrees,
  );
}

export function setTempValues() {
  const currentTempValues = getCurrentTempValues();
  const tempContainers = getTempContainers();

  const celsiusToFahrenheit = (celsius) => Math.round((celsius * 9) / 5) + 32;
  const fahrenheitToCelsius = (fahrenheit) => Math.round(((fahrenheit - 32) * 5) / 9);

  const temperatureValueToday = parseFloat(currentTempValues.todaysWeatherDegrees.replace(/[℃]/g, ''));
  const temperatureValueDay1 = parseFloat(currentTempValues.forecastDegreesDay1.replace(/[℃]/g, ''));
  const temperatureValueDay2 = parseFloat(currentTempValues.forecastDegreesDay2.replace(/[℃]/g, ''));

  if (getTempScale() === true) {
    tempContainers.todaysTempContainer.innerHTML = `${celsiusToFahrenheit(temperatureValueToday)} °F`;
    tempContainers.forecastTempContainerDay1.innerHTML = `${celsiusToFahrenheit(temperatureValueDay1)} °F`;
    tempContainers.forecastTempContainerDay2.innerHTML = `${celsiusToFahrenheit(temperatureValueDay2)} °F`;
  } else if (getTempScale() === false) {
    tempContainers.todaysTempContainer.innerHTML = `${fahrenheitToCelsius(temperatureValueToday)} °C`;
    tempContainers.forecastTempContainerDay1.innerHTML = `${fahrenheitToCelsius(temperatureValueDay1)} °C`;
    tempContainers.forecastTempContainerDay2.innerHTML = `${fahrenheitToCelsius(temperatureValueDay2)} °C`;
  }
}

export function setNewContent(formattedData) {
  setElementsTodaysWeather(formattedData);

  for (let dayIndex = 1; dayIndex <= 2; dayIndex++) {
    setElementsForecast(dayIndex, formattedData);
  }
}
