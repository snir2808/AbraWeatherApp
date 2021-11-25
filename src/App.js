import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setUserLocation } from "./Redux/action/weatherAction";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";
import NavBar from "./components/NavBar/NavBar";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.weather);

  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  useEffect(() => {
    if (!state.userLocation) {
      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  }, []);

  const success = (pos) => {
    let latitude = pos.coords.latitude;
    let longitude = pos.coords.longitude;
    dispatch(setUserLocation(latitude, longitude));
    toast.success("Location found! 🧭", {});
  };
  const error = () => {
    toast.warn("Location not found! 😞", {});
  };
  console.log("snir app for abra");

  return (
    <div className="root">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
