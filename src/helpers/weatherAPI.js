const key = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const response = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${key}&q=${term}`);
  const data = await response.json();
  if (!data[0]) {
    alert('Nenhuma cidade encontrada');
  }
  return data;
};

export const getWeatherByCity = async (cityURL) => {
  const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${cityURL}&aqi=yes`);
  return result.json();
};

export const getWeather7Days = async (cityURL, days) => {
  const result = await fetch(`http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${key}&q=${cityURL}&days=${days}`);
  const data = await result.json();
  const forecast = await data.forecast.forecastday;
  const city7DaysTemp = forecast.map(async (day) => ({
    date: day.date,
    maxTemp: day.day.maxtemp_c,
    minTemp: day.day.mintemp_c,
    condition: day.day.condition.text,
    icon: day.day.condition.icon,
  }));
  return Promise.all(city7DaysTemp);
};
