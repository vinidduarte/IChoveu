


export const searchCities = async (term) => {
  try{
    const token = d5d8b558f2c741b8945150501230509;
    const url = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${token}&q=${term}`;
  const response = await fetch(url);
  const data = await response.json();
  const city = data.find(data => data.name.toLowerCase() === term.toLowerCase());
  if (!city) {
    window.alert('Nenhuma cidade encontrada');
    return [];
  }
    return [city];
  } catch (error) {
    console.error(error);
    window.alert('Ocorreu um erro ao buscar a cidade.');
    return [];
}};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
