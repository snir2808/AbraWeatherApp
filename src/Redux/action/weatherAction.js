import * as actionTypes from "./actionType";

export const setUserLocation = (latitude, longitude) => {
  return {
    type: actionTypes.USER_LOCATION,
    payload: {
      latitude,
      longitude,
    },
  };
};

export const setCurrentWeatherData = (data) => {
  return {
    type: actionTypes.CURRENT_DATA,
    payload: {
      data,
    },
  };
};

export const addToFavorite = (city) => {
  return {
    type: actionTypes.ADD_TO_FAVORITE,
    payload: {
      city,
    },
  };
};

export const removeFromFavorite = (city) => {
  return {
    type: actionTypes.REMOVE_FROM_FAVORITE,
    payload: {
      city,
    },
  };
};

export const setTheme = (dark) => {
  return {
    type: actionTypes.DARK_BUTTON,
    payload: {
      dark,
    },
  };
};

export const setTemperature = (temp) => {
  return {
    type: actionTypes.CELSIUS_BUTTON,
    payload: {
      temp,
    },
  };
};
