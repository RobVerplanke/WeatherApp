// Select the searchbar and the submitbutton
export default function getFormElements() {
  const searchBar = document.querySelector('#search-location');
  const submitButton = document.querySelector('#search-submit');

  return { searchBar, submitButton };
}

// Select all 'today's weather' content holders
function getElementsTodaysWeather() {
  const todaysWeatherHolder = document.querySelector('.content__weather-today');
  const todaysWeatherTitle = document.querySelector('.content__title');
  const todaysWeatherDescription = document.querySelector('.weather-today__desc');
  const todaysWeatherDegrees = document.querySelector('.weather-today__degrees');

  return {
    todaysWeatherHolder,
    todaysWeatherTitle,
    todaysWeatherDescription,
    todaysWeatherDegrees,
  };
}

// Select all forecast content holders
function getElementsForecast() {
  const weatherForecastDay1 = document.querySelector('.weather-forecast__tomorrow');
  const forecastTitleDay1 = document.querySelector('.weather-forecast-tomorrow__title');
  const forecastDescriptionDay1 = document.querySelector('.weather-forecast-tomorrow__desc');
  const forecastDegreesDay1 = document.querySelector('.weather-forecast-tomorrow__degrees');

  const weatherForecastDay2 = document.querySelector('.weather-forecast__2nd-day');
  const forecastTitleDay2 = document.querySelector('.weather-forecast-2nd-day__title');
  const forecastDescriptionDay2 = document.querySelector('.weather-forecast-2nd-day__desc');
  const forecastDegreesDay2 = document.querySelector('.weather-forecast-2nd-day__degrees');

  const weatherForecastDay3 = document.querySelector('.weather-forecast__3rd-day');
  const forecastTitleDay3 = document.querySelector('.weather-forecast-3rd-day__title');
  const forecastDescriptionDay3 = document.querySelector('.weather-forecast-3rd-day__desc');
  const forecastDegreesDay3 = document.querySelector('.weather-forecast-3rd-day__degrees');

  return {
    weatherForecastDay1,
    forecastTitleDay1,
    forecastDescriptionDay1,
    forecastDegreesDay1,
    weatherForecastDay2,
    forecastTitleDay2,
    forecastDescriptionDay2,
    forecastDegreesDay2,
    weatherForecastDay3,
    forecastTitleDay3,
    forecastDescriptionDay3,
    forecastDegreesDay3,
  };
}

// Select the icon container for 'today's weather'
function getIconContainerTodaysWeather() {
  const todaysWeatherIcon = document.querySelector('.weather-today__icon');

  return todaysWeatherIcon;
}

// Select the icon containers in the forecast section
function getIconContainersForecast() {
  const forecastIconDay1 = document.querySelector('.weather-forecast-tomorrow__icon');
  const forecastIconDay2 = document.querySelector('.weather-forecast-2nd-day__icon');
  const forecastIconDay3 = document.querySelector('.weather-forecast-3rd-day__icon');

  return [
    forecastIconDay1,
    forecastIconDay2,
    forecastIconDay3,
  ];
}

// Set all corresponding content in the forecast section
export function setTextElementsForecast(weatherData) {
  const ForecastElements = getElementsForecast();

  // Set the day(title) of the forecast
  ForecastElements.forecastTitleDay1.innerHTML = weatherData.forecastDay1Title;
  ForecastElements.forecastTitleDay2.innerHTML = weatherData.forecastDay2Title;
  ForecastElements.forecastTitleDay3.innerHTML = weatherData.forecastDay3Title;

  // Set the forecast description for each day
  ForecastElements.forecastDescriptionDay1.innerHTML = weatherData.forecastDay1Text;
  ForecastElements.forecastDescriptionDay2.innerHTML = weatherData.forecastDay2Text;
  ForecastElements.forecastDescriptionDay3.innerHTML = weatherData.forecastDay3Text;

  // Set the forecast temperature for each day
  ForecastElements.forecastDegreesDay1.innerHTML = `${weatherData.forecastDay1Temp} ℃`;
  ForecastElements.forecastDegreesDay2.innerHTML = `${weatherData.forecastDay2Temp} ℃`;
  ForecastElements.forecastDegreesDay3.innerHTML = `${weatherData.forecastDay3Temp} ℃`;

  // Append content to the content containers
  ForecastElements.weatherForecastDay1.append(
    ForecastElements.forecastTitleDay1,
    ForecastElements.forecastDescriptionDay1,
    ForecastElements.forecastDegreesDay1,
  );

  ForecastElements.weatherForecastDay2.append(
    ForecastElements.forecastTitleDay2,
    ForecastElements.forecastDescriptionDay2,
    ForecastElements.forecastDegreesDay2,
  );

  ForecastElements.weatherForecastDay3.append(
    ForecastElements.forecastTitleDay3,
    ForecastElements.forecastDescriptionDay3,
    ForecastElements.forecastDegreesDay3,
  );
}

// Set all corresponding content in 'today's weather'
export function setTextElementsTodaysWeather(weatherData) {
  const TodaysWeatherElements = getElementsTodaysWeather();

  // Set the content of todays weather
  TodaysWeatherElements.todaysWeatherTitle.innerHTML = `<h1>Today's weather in ${weatherData.location}</h1>`;
  TodaysWeatherElements.todaysWeatherDescription.innerHTML = weatherData.currentConditionText;
  TodaysWeatherElements.todaysWeatherDegrees.innerHTML = `${weatherData.currentTemp_c} ℃`;

  // Append content to the content containers
  TodaysWeatherElements.todaysWeatherHolder.append(
    TodaysWeatherElements.todaysWeatherDescription,
    TodaysWeatherElements.todaysWeatherDegrees,
  );
}

// Create a new icon
function createIcon(url) {
  const icon = document.createElement('img');
  const iconUrl = `https:${url}`;
  icon.src = iconUrl;
  return icon;
}

// Set the corresponding icon in 'today's weather'
export function setIconTodaysWeather(weatherData) {
  const iconContainerTodaysWeather = getIconContainerTodaysWeather();

  iconContainerTodaysWeather.append(createIcon(weatherData.currentConditionIcon));
}

// Set the corresponding icons in the forecast section
export function setIconsForecast(weatherData) {
  const [iconContainerDay1, iconContainerDay2, iconContainerDay3] = getIconContainersForecast();

  iconContainerDay1.append(createIcon(weatherData.forecastDay1Icon));
  iconContainerDay2.append(createIcon(weatherData.forecastDay2Icon));
  iconContainerDay3.append(createIcon(weatherData.forecastDay3Icon));
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
