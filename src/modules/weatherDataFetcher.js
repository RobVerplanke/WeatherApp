// Function that fetches all data
export default async function fetchWeather(location) {
  const apiKey = '106cea8e9d704e439de122930230708';
  const forecastDays = 4;
  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=${forecastDays}`;
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const weatherData = await response.json();
    return weatherData;
    // filterData(weatherData);
  } catch (error) {
    throw error;
  }
}

// Function that filters data on required data
// function filterData(data) {
//   const filteredData = {
//     data.location,
//     data.current.condition.text,
//     data.current.condition.icon,
//     data.current.temp_c,
//     etc
// }

//   return filteredData;
// }
