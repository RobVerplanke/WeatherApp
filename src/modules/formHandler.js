/* eslint-disable max-len */
import getFormElements, {
  setTextElementsTodaysWeather, setElementsForecast, setIconTodaysWeather, clearIconContainers,
} from './weatherDisplay';
import fetchWeather from './weatherDataFetcher';

export default function addEventListener() {
  const { searchBar, submitButton } = getFormElements();

  submitButton.addEventListener('click', async () => {
    const formattedData = await fetchWeather(searchBar.value);
    setTextElementsTodaysWeather(formattedData);
    clearIconContainers();
    setIconTodaysWeather(formattedData);
    setElementsForecast(formattedData);
  });
}
