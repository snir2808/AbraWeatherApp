import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

const Forecasts = () => {
  const state = useSelector((state) => state.weather);

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div>
      {state.currentData.data?.forecasts && (
        <div className={`forecastContainer ${state.isDark}ForCon`}>
          <div className={`day ${state.isDark}`}>
            <p>
              {
                dayNames[
                  new Date(
                    state.currentData.data.forecasts.DailyForecasts[0].Date
                  ).getDay()
                ]
              }
            </p>
            <img
              alt="icon"
              className="forecastIcon"
              src={require(`../../../public/icons/conditions/${state.currentData.data.forecasts.DailyForecasts[0].Day.Icon}.svg`)}
            />{" "}
            <br />
            {state.isCelsius
              ? Math.floor(
                  state.currentData.data.forecasts.DailyForecasts[0].Temperature
                    .Minimum.Value
                ) + "°"
              : Math.floor(
                  (state.currentData.data.forecasts.DailyForecasts[0]
                    .Temperature.Minimum.Value *
                    5) /
                    9 +
                    32
                ) + "°"}
            {" - "}
            {state.isCelsius
              ? Math.floor(
                  state.currentData.data.forecasts.DailyForecasts[0].Temperature
                    .Maximum.Value
                ) + "°"
              : Math.floor(
                  (state.currentData.data.forecasts.DailyForecasts[0]
                    .Temperature.Maximum.Value *
                    5) /
                    9 +
                    32
                ) + "°"}
          </div>

          <div className={`day ${state.isDark}`}>
            <p>
              {
                dayNames[
                  new Date(
                    state.currentData.data.forecasts.DailyForecasts[1].Date
                  ).getDay()
                ]
              }
            </p>
            <img
              alt="icon"
              className="forecastIcon"
              src={require(`../../../public/icons/conditions/${state.currentData.data.forecasts.DailyForecasts[1].Day.Icon}.svg`)}
            />{" "}
            <br />
            {state.isCelsius
              ? Math.floor(
                  state.currentData.data.forecasts.DailyForecasts[1].Temperature
                    .Minimum.Value
                ) + "°"
              : Math.floor(
                  (state.currentData.data.forecasts.DailyForecasts[1]
                    .Temperature.Minimum.Value *
                    5) /
                    9 +
                    32
                ) + "°"}
            {" - "}
            {state.isCelsius
              ? Math.floor(
                  state.currentData.data.forecasts.DailyForecasts[1].Temperature
                    .Maximum.Value
                ) + "°"
              : Math.floor(
                  (state.currentData.data.forecasts.DailyForecasts[1]
                    .Temperature.Maximum.Value *
                    5) /
                    9 +
                    32
                ) + "°"}
          </div>

          <div className={`day ${state.isDark}`}>
            <p>
              {
                dayNames[
                  new Date(
                    state.currentData.data.forecasts.DailyForecasts[2].Date
                  ).getDay()
                ]
              }
            </p>
            <img
              alt="icon"
              className="forecastIcon"
              src={require(`../../../public/icons/conditions/${state.currentData.data.forecasts.DailyForecasts[2].Day.Icon}.svg`)}
            />{" "}
            <br />
            {state.isCelsius
              ? Math.floor(
                  state.currentData.data.forecasts.DailyForecasts[2].Temperature
                    .Minimum.Value
                ) + "°"
              : Math.floor(
                  (state.currentData.data.forecasts.DailyForecasts[2]
                    .Temperature.Minimum.Value *
                    5) /
                    9 +
                    32
                ) + "°"}
            {" - "}
            {state.isCelsius
              ? Math.floor(
                  state.currentData.data.forecasts.DailyForecasts[2].Temperature
                    .Maximum.Value
                ) + "°"
              : Math.floor(
                  (state.currentData.data.forecasts.DailyForecasts[2]
                    .Temperature.Maximum.Value *
                    5) /
                    9 +
                    32
                ) + "°"}
          </div>

          <div className={`day ${state.isDark}`}>
            <p>
              {
                dayNames[
                  new Date(
                    state.currentData.data.forecasts.DailyForecasts[3].Date
                  ).getDay()
                ]
              }
            </p>
            <img
              alt="icon"
              className="forecastIcon"
              src={require(`../../../public/icons/conditions/${state.currentData.data.forecasts.DailyForecasts[3].Day.Icon}.svg`)}
            />{" "}
            <br />
            {state.isCelsius
              ? Math.floor(
                  state.currentData.data.forecasts.DailyForecasts[3].Temperature
                    .Minimum.Value
                ) + "°"
              : Math.floor(
                  (state.currentData.data.forecasts.DailyForecasts[3]
                    .Temperature.Minimum.Value *
                    5) /
                    9 +
                    32
                ) + "°"}
            {" - "}
            {state.isCelsius
              ? Math.floor(
                  state.currentData.data.forecasts.DailyForecasts[3].Temperature
                    .Maximum.Value
                ) + "°"
              : Math.floor(
                  (state.currentData.data.forecasts.DailyForecasts[3]
                    .Temperature.Maximum.Value *
                    5) /
                    9 +
                    32
                ) + "°"}
          </div>

          <div className={`day ${state.isDark}`}>
            <p>
              {
                dayNames[
                  new Date(
                    state.currentData.data.forecasts.DailyForecasts[4].Date
                  ).getDay()
                ]
              }
            </p>
            <img
              alt="icon"
              className="forecastIcon"
              src={require(`../../../public/icons/conditions/${state.currentData.data.forecasts.DailyForecasts[4].Day.Icon}.svg`)}
            />{" "}
            <br />
            {state.isCelsius
              ? Math.floor(
                  state.currentData.data.forecasts.DailyForecasts[4].Temperature
                    .Minimum.Value
                ) + "°"
              : Math.floor(
                  (state.currentData.data.forecasts.DailyForecasts[4]
                    .Temperature.Minimum.Value *
                    5) /
                    9 +
                    32
                ) + "°"}
            {" - "}
            {state.isCelsius
              ? Math.floor(
                  state.currentData.data.forecasts.DailyForecasts[4].Temperature
                    .Maximum.Value
                ) + "°"
              : Math.floor(
                  (state.currentData.data.forecasts.DailyForecasts[4]
                    .Temperature.Maximum.Value *
                    5) /
                    9 +
                    32
                ) + "°"}
          </div>
        </div>
      )}
    </div>
  );
};

export default Forecasts;
