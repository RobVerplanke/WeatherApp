import getFormElements, { setTextElementsTodaysWeather, setTextElementsForecast } from './weatherDisplay';
import fetchWeather from './weatherDataFetcher';

export default function addEventListener() {
  const { searchBar, submitButton } = getFormElements();

  submitButton.addEventListener('click', async () => {
    const formattedData = await fetchWeather(searchBar.value);
    console.log(searchBar.value);
    setTextElementsTodaysWeather(formattedData);
    setTextElementsForecast(formattedData);
  });
}
