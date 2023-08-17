import fetchWeather from './modules/weatherDataFetcher';
import addEventListeners from './modules/formHandler';
import { setTextElementsTodaysWeather, setIconTodaysWeather, setElementsForecast } from './modules/weatherDisplay';

const defaultLocation = 'Groningen';

// IIFE - Initially load the weather of the default location
(async function loadDefaultWeather() {
  const formattedData = await fetchWeather(defaultLocation);
  setTextElementsTodaysWeather(formattedData);
  setIconTodaysWeather(formattedData);
  setElementsForecast(formattedData);
}());

// Make the search button work
addEventListeners();
