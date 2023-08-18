/* eslint-disable max-len */
import fetchWeather from './modules/weatherDataFetcher';
import addEventListeners from './modules/formHandler';
import { setNewContent } from './modules/weatherDisplay';

const defaultLocation = 'Groningen';

// IIFE - Initially load the weather of the default location
(async () => {
  const formattedData = await fetchWeather(defaultLocation);
  setNewContent(formattedData);
})();

// Make the search button and toggle switch usable
addEventListeners();
