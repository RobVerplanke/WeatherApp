/* eslint-disable max-len */
import { getFormElements, setNewContent } from './weatherDisplay';
import fetchWeather from './weatherDataFetcher';

export default function addEventListeners() {
  const { searchBar, submitButton, temperatureToggle } = getFormElements();

  submitButton.addEventListener('click', async () => {
    const formattedData = await fetchWeather(searchBar.value);
    setNewContent(formattedData);
  });

  temperatureToggle.addEventListener('change', function () {
    if (this.checked) {
      // refresh temperature content
      console.log('check');
    } else {
      return console.log('unchecked');
    }
  });
}
