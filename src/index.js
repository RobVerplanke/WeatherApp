import fetchWeather from './modules/weatherDataFetcher';
import addEventListener from './modules/formHandler';
import {
  setTextElementsTodaysWeather, setElementsForecast, setIconTodaysWeather,
} from './modules/weatherDisplay';

const defaultLocation = 'Groningen';

// IIFE - Initially load the weather of the default location
(async function loadDefaultWeather() {
  const formattedData = await fetchWeather(defaultLocation);

  setTextElementsTodaysWeather(formattedData);
  setIconTodaysWeather(formattedData);
  setElementsForecast(formattedData);
}());

// Make the search button work
addEventListener();
