import { getFormElements, setUserData } from './weatherDisplay';
import fetchWeather from './weatherDataFetcher';

const { searchBar, submitButton } = getFormElements();

export default function addEventListeners() {
  submitButton.addEventListener('click', () => {
    console.log(searchBar.value);
    setUserData(fetchWeather(searchBar.value));
  });
}
