import * as actionTypes from "./../action/actionType";
const INITIAL_STATE = {
  favorites: [],
  isLoading: false,
  userLocation: false,
  currentData: {},
  isCelsius: true,
  isDark: "dark",
  locationFlag: false,
};

const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.USER_LOCATION:
      return {
        ...state,
        userLocation: action.payload,
      };

    case actionTypes.CURRENT_DATA:
      return {
        ...state,
        currentData: action.payload,
      };

    case actionTypes.ADD_TO_FAVORITE:
      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
        locationFlag: true,
      };

    case actionTypes.REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (city) => city.city.cityData.Key !== action.payload.city.cityData.Key
        ),
      };

    case actionTypes.DARK_BUTTON:
      return {
        ...state,
        isDark: action.payload.dark,
      };

    case actionTypes.CELSIUS_BUTTON:
      return {
        ...state,
        isCelsius: action.payload.temp,
      };

    default:
      return state;
  }
};
export default weatherReducer;
