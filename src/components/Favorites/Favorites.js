import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentWeatherData } from "../../Redux/action/weatherAction";
import { getWeatherDataByKey } from "./../Functions/ApiFunctions";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "./Favorites.css";

const Favorites = () => {
  const state = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getWeatherData = async (city) => {
    let currentWeather = await getWeatherDataByKey(city.city.cityData.Key);
    if (currentWeather === "error") {
      return toast.warn(
        "Something bad happened .. Please try again later! 😞",
        {}
      );
    }
    currentWeather = { ...currentWeather, cityData: city.city.cityData };
    dispatch(setCurrentWeatherData(currentWeather));
    navigate("/");
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1 className={`h1Fav ${state.isDark}`}>Favorites</h1>
      {state.favorites.length == 0 && (
        <h2 className={`h2Fav ${state.isDark}`}>
          You don't have any favorite locations yet.
        </h2>
      )}

      <div className={`container ${state.isDark}Con`}>
        {state.favorites.map((favorite) => {
          return (
            <div
              className={`fav ${state.isDark}`}
              onClick={() => {
                getWeatherData(favorite);
              }}
            >
              <p>{favorite.city.cityData.LocalizedName}</p>
              <p>
                {state.isCelsius
                  ? Math.floor(favorite.city.data[0].Temperature.Metric.Value) +
                    "°"
                  : Math.floor(
                      (favorite.city.data[0].Temperature.Metric.Value * 5) / 9 +
                        32
                    ) + "°"}
              </p>
              <p>
                <img
                  alt="icon"
                  className="icon"
                  src={require(`../../../public/icons/conditions/${favorite.city.data[0].WeatherIcon}.svg`)}
                />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
