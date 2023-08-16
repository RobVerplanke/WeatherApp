import getFormElements, {
  // eslint-disable-next-line max-len
  setTextElementsTodaysWeather, setTextElementsForecast, setIconTodaysWeather, setIconsForecast, clearIconContainers,
} from './weatherDisplay';
import fetchWeather from './weatherDataFetcher';

export default function addEventListener() {
  const { searchBar, submitButton } = getFormElements();

  submitButton.addEventListener('click', async () => {
    const formattedData = await fetchWeather(searchBar.value);
    clearIconContainers();
    setTextElementsTodaysWeather(formattedData);
    setIconTodaysWeather(formattedData);
    setTextElementsForecast(formattedData);
    setIconsForecast(formattedData);
  });
}
