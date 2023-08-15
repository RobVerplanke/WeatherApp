export default async function fetchWeather(location) {
  const apiKey = '106cea8e9d704e439de122930230708';
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    throw error;
  }
}
