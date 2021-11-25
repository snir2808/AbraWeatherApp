import React, { useState, useEffect } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import {
  Autocomplete,
  getKeyByCoords,
  getWeatherDataByKey,
} from "../Functions/ApiFunctions";
import {
  setCurrentWeatherData,
  addToFavorite,
  removeFromFavorite,
} from "../../Redux/action/weatherAction";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Forecasts from "../Forecasts/Forecasts";
import "./style.css";

const Home = () => {
  const state = useSelector((state) => state.weather);

  const [isFavorite, setIsFavorite] = useState();
  const [results, setResult] = useState();

  const dispatch = useDispatch();

  const Item = styled(Typography)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  useEffect(async () => {
    if (!state.locationFlag) {
      if (state.userLocation) {
        let response = await getKeyByCoords(
          state.userLocation.latitude,
          state.userLocation.longitude
        );
        if (response === "error") {
          return toast.warn(
            "Something bad happened .. Please try again later! 😞",
            {}
          );
        } else {
          dispatch(setCurrentWeatherData(response));
        }
      } else {
        let response = await getWeatherDataByKey(215854);
        if (response === "error") {
          return toast.warn(
            "Something bad happened .. Please try again later! 😞",
            {}
          );
        }
        response = {
          ...response,
          cityData: {
            LocalizedName: "Tel Aviv",
            Key: 215854,
          },
        };
        dispatch(setCurrentWeatherData(response));
      }
    }
  }, [state.userLocation]);

  useEffect(() => {
    setIsFavorite(
      state.favorites.find((city) =>
        city.city.cityData.Key === state.currentData.data.cityData.Key
          ? true
          : false
      )
    );
  }, [state]);

  const getWeatherData = async (city) => {
    let currentWeather = await getWeatherDataByKey(city.Key);
    if (currentWeather === "error") {
      return toast.warn(
        "Something bad happened .. Please try again later! 😞",
        {}
      );
    }
    currentWeather = { ...currentWeather, cityData: city };
    dispatch(setCurrentWeatherData(currentWeather));
  };

  const handleSearch = async (inputValue) => {
    if (inputValue.length > 2) {
      let response = await Autocomplete(inputValue);
      if (response === "error") {
        return toast.warn(
          "Something bad happened .. Please try again later! 😞",
          {}
        );
      }
      setResult(response);
    }
  };
  return (
    <div onClick={() => setResult()}>
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
      <div className={`mainDataDiv ${state.isDark}Div`}>
        <Grid container justifyContent="center" style={{ paddingTop: "45px" }}>
          <div>
            <input
              className={`textField ${state.isDark}Input`}
              placeholder="⛈️ ❔ ☔ : 👙..."
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
            />
            {results && (
              <div>
                <ul className="searchList">
                  {results.map((city) => {
                    return (
                      <li
                        onClick={() => {
                          getWeatherData(city);
                          setResult();
                        }}
                      >
                        {city.LocalizedName}, {city.Country.LocalizedName}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </Grid>

        <div>
          {state.currentData.data && (
            <>
              <Grid
                container
                justifyContent="center"
                style={{ paddingTop: "45px" }}
              >
                <Grid item xs={12}>
                  <Item>
                    {state.currentData.data.cityData ? (
                      <Typography
                        className={`typographyCityName ${state.isDark}CityName`}
                        variant="h2"
                      >
                        {state.currentData.data.cityData.LocalizedName}
                      </Typography>
                    ) : (
                      <Typography
                        style={{ color: "#fff" }}
                        className={`typographyCityName ${state.isDark}CityName`}
                        variant="h2"
                      >
                        Tel Aviv
                      </Typography>
                    )}
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>
                    <Typography
                      className={`typographyMainTemp ${state.isDark}MainTemp`}
                      variant="h2"
                    >
                      {state.isCelsius
                        ? Math.floor(
                            state.currentData.data.data[0].Temperature.Metric
                              .Value
                          ) + "°"
                        : Math.floor(
                            (state.currentData.data.data[0].Temperature.Metric
                              .Value *
                              5) /
                              9 +
                              32
                          ) + "°"}
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>
                    <img
                      alt="icon"
                      className="mainIconWeather"
                      src={require(`../../../public/icons/conditions/${state.currentData.data.data[0].WeatherIcon}.svg`)}
                    />
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>
                    <Typography
                      className={`typographyWeatherText ${state.isDark}WeatherText`}
                      variant="h4"
                    >
                      {state.currentData.data.data[0].WeatherText}{" "}
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>
                    <div className="favBtn">
                      {isFavorite ? (
                        <Button
                          onClick={() => {
                            dispatch(
                              removeFromFavorite(state.currentData.data)
                            );
                          }}
                        >
                          <img
                            alt="icon"
                            src={require("./../NavBar/assets/heart-svgrepo-com (1).svg")}
                          />
                        </Button>
                      ) : (
                        <Button
                          onClick={() => {
                            dispatch(addToFavorite(state.currentData.data));
                          }}
                        >
                          <img
                            alt="icon"
                            src={require("./../NavBar/assets/heart-svgrepo-com.svg")}
                          />
                        </Button>
                      )}
                    </div>
                  </Item>
                </Grid>
              </Grid>
            </>
          )}
        </div>
      </div>
      <Forecasts />
    </div>
  );
};

export default Home;
