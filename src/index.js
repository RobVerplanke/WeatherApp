import fetchWeather from './modules/weatherDataFetcher';
import addEventListener from './modules/formHandler';

const defaultLocation = 'Groningen';

fetchWeather(defaultLocation);
addEventListener();
