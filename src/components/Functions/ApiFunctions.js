const apikey = "S7IF8eiS5wXcPgreNQETxB1HOWSGoplW";
const axios = require("axios").default;

export const Autocomplete = async (inputValue) => {
  try {
    const response = await axios.get(
      `https://peaceful-taiga-64214.herokuapp.com/http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apikey}&q=${inputValue}`
    );
    return response.data;
  } catch (error) {
    return "error";
  }
};

export const getForecastsData = async (key) => {
  let forecastData;

  try {
    const response = await axios.get(
      `https://peaceful-taiga-64214.herokuapp.com/http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${apikey}&metric=true`
    );
    forecastData = response.data;
    return forecastData;
  } catch (error) {
    return "error";
  }
};

export const getWeatherDataByKey = async (key) => {
  let results;

  try {
    const response = await axios.get(
      `https://peaceful-taiga-64214.herokuapp.com/http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${apikey}`
    );
    let forecastData = await getForecastsData(key);
    results = {
      data: response.data,
      forecasts: forecastData,
    };
    return results;
  } catch (error) {
    return "error";
  }
};

export const getKeyByCoords = async (latitude, longitude) => {
  let cityKey;
  let results;

  try {
    const response = await axios.get(
      `https://peaceful-taiga-64214.herokuapp.com/http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apikey}&q=${latitude}%2C${longitude}&details=true`
    );
    cityKey = response.data;
    results = await getWeatherDataByKey(cityKey.Key);
    results = { ...results, cityData: cityKey };
    return results;
  } catch (error) {
    return "error";
  }
};
