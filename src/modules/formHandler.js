/* eslint-disable max-len */
import {
  clearIconContainers, getFormElements, setNewContent, setTempValues,
} from './weatherDisplay';
import fetchWeather from './weatherDataFetcher';

const { searchBar, submitButton, temperatureToggle } = getFormElements();

export default function addEventListeners() {
  submitButton.addEventListener('click', async () => {
    const formattedData = await fetchWeather(searchBar.value);
    clearIconContainers();
    setNewContent(formattedData);
  });

  temperatureToggle.addEventListener('change', () => {
    setTempValues();
  });
}
