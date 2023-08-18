// Select the searchbar and the submit button
export function getFormElements() {
  const searchBar = document.querySelector('#search-location');
  const submitButton = document.querySelector('#search-submit');
  const temperatureToggle = document.getElementById('temperature-toggle');

  return { searchBar, submitButton, temperatureToggle };
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
function getElementsForecastDay1() {
  const weatherForecastDay1 = document.querySelector('.weather-forecast__tomorrow');
  const forecastTitleDay1 = document.querySelector('.weather-forecast-tomorrow__title');
  const forecastIconDay1 = document.querySelector('.weather-forecast-tomorrow__icon');
  const forecastDescriptionDay1 = document.querySelector('.weather-forecast-tomorrow__desc');
  const forecastDegreesDay1 = document.querySelector('.weather-forecast-tomorrow__degrees');

  return {
    weatherForecastDay1,
    forecastTitleDay1,
    forecastIconDay1,
    forecastDescriptionDay1,
    forecastDegreesDay1,
  };
}

// Select content holders in forecast section for day 2
function getElementsForecastDay2() {
  const weatherForecastDay2 = document.querySelector('.weather-forecast__2nd-day');
  const forecastTitleDay2 = document.querySelector('.weather-forecast-2nd-day__title');
  const forecastIconDay2 = document.querySelector('.weather-forecast-2nd-day__icon');
  const forecastDescriptionDay2 = document.querySelector('.weather-forecast-2nd-day__desc');
  const forecastDegreesDay2 = document.querySelector('.weather-forecast-2nd-day__degrees');

  return {

    weatherForecastDay2,
    forecastTitleDay2,
    forecastIconDay2,
    forecastDescriptionDay2,
    forecastDegreesDay2,
  };
}
// Select content holders in forecast section for day 3
function getElementsForecastDay3() {
  const weatherForecastDay3 = document.querySelector('.weather-forecast__3rd-day');
  const forecastTitleDay3 = document.querySelector('.weather-forecast-3rd-day__title');
  const forecastIconDay3 = document.querySelector('.weather-forecast-3rd-day__icon');
  const forecastDescriptionDay3 = document.querySelector('.weather-forecast-3rd-day__desc');
  const forecastDegreesDay3 = document.querySelector('.weather-forecast-3rd-day__degrees');

  return {
    weatherForecastDay3,
    forecastTitleDay3,
    forecastIconDay3,
    forecastDescriptionDay3,
    forecastDegreesDay3,
  };
}

// Select the icon container for 'today's weather' section
function getIconContainerTodaysWeather() {
  const todaysWeatherIcon = document.querySelector('.weather-today__icon');

  return todaysWeatherIcon;
}

// Select the icon containers in the forecast section
function getIconContainersForecast() {
  const iconContainerDay1 = document.querySelector('.weather-forecast-tomorrow__icon');
  const iconContainerDay2 = document.querySelector('.weather-forecast-2nd-day__icon');
  const iconContainerDay3 = document.querySelector('.weather-forecast-3rd-day__icon');

  return [
    iconContainerDay1,
    iconContainerDay2,
    iconContainerDay3,
  ];
}

// Create and return a new icon
function createIcon(url, addClass) {
  const icon = document.createElement('img');
  const iconUrl = `https:${url}`;

  icon.src = iconUrl;
  icon.classList.add(addClass);

  return icon;
}

// Empty all icon holders
export function clearIconContainers() {
  const iconContainerTodaysWeather = getIconContainerTodaysWeather();
  const [iconContainerDay1, iconContainerDay2, iconContainerDay3] = getIconContainersForecast();

  iconContainerTodaysWeather.innerHTML = '';
  iconContainerDay1.innerHTML = '';
  iconContainerDay2.innerHTML = '';
  iconContainerDay3.innerHTML = '';
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
export function setElementsForecastDay1(weatherData) {
  const ForecastElementsDay1 = getElementsForecastDay1();

  ForecastElementsDay1.forecastTitleDay1.innerHTML = weatherData.forecastDay1Title;
  ForecastElementsDay1.forecastIconDay1.append(createIcon(weatherData.forecastDay1Icon));
  ForecastElementsDay1.forecastDescriptionDay1.innerHTML = weatherData.forecastDay1Text;
  ForecastElementsDay1.forecastDegreesDay1.innerHTML = `${weatherData.forecastDay1Temp_c} ℃`;

  // Append content to the content containers
  ForecastElementsDay1.weatherForecastDay1.append(
    ForecastElementsDay1.forecastTitleDay1,
    ForecastElementsDay1.forecastIconDay1,
    ForecastElementsDay1.forecastDescriptionDay1,
    ForecastElementsDay1.forecastDegreesDay1,
  );
}

export function setElementsForecastDay2(weatherData) {
  const ForecastElementsDay2 = getElementsForecastDay2();

  ForecastElementsDay2.forecastTitleDay2.innerHTML = weatherData.forecastDay2Title;
  ForecastElementsDay2.forecastIconDay2.append(createIcon(weatherData.forecastDay2Icon));
  ForecastElementsDay2.forecastDescriptionDay2.innerHTML = weatherData.forecastDay2Text;
  ForecastElementsDay2.forecastDegreesDay2.innerHTML = `${weatherData.forecastDay2Temp_c} ℃`;

  // Append content to the content containers
  ForecastElementsDay2.weatherForecastDay2.append(
    ForecastElementsDay2.forecastTitleDay2,
    ForecastElementsDay2.forecastIconDay2,
    ForecastElementsDay2.forecastDescriptionDay2,
    ForecastElementsDay2.forecastDegreesDay2,
  );
}

export function setElementsForecastDay3(weatherData) {
  const ForecastElementsDay3 = getElementsForecastDay3();

  ForecastElementsDay3.forecastTitleDay3.innerHTML = weatherData.forecastDay3Title;
  ForecastElementsDay3.forecastIconDay3.append(createIcon(weatherData.forecastDay3Icon));
  ForecastElementsDay3.forecastDescriptionDay3.innerHTML = weatherData.forecastDay3Text;
  ForecastElementsDay3.forecastDegreesDay3.innerHTML = `${weatherData.forecastDay3Temp_c} ℃`;

  // Append content to the content containers
  ForecastElementsDay3.weatherForecastDay3.append(
    ForecastElementsDay3.forecastTitleDay3,
    ForecastElementsDay3.forecastIconDay3,
    ForecastElementsDay3.forecastDescriptionDay3,
    ForecastElementsDay3.forecastDegreesDay3,
  );
}

export function setNewContent(formattedData) {
  clearIconContainers();
  setElementsTodaysWeather(formattedData);
  setElementsForecastDay1(formattedData);
  setElementsForecastDay2(formattedData);
  setElementsForecastDay3(formattedData);
}
