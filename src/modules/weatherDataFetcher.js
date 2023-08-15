export default async function fetchWeather() {
  try {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=106cea8e9d704e439de122930230708&q=london');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const weatherData = await response.json();
    console.log(weatherData);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
