import React from "react";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import logo from "./assets/abra-logo.png";
import lightLogo from "./assets/lightLogo.jpeg";
import moon from "./assets/33.svg";
import sun from "./assets/1.svg";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, setTemperature } from "./../../Redux/action/weatherAction";

const NavBar = (props) => {
  const state = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const HideOnScroll = (props) => {
    const { children, window } = props;

    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  };

  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

  const toggleTheme = () => {
    if (state.isDark === "dark") {
      dispatch(setTheme("light"));
    } else {
      dispatch(setTheme("dark"));
    }
  };

  return (
    <div>
      <Navbar
        bg={`${state.isDark}`}
        variant={`${state.isDark}`}
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Navbar.Brand>
          {state.isDark === "dark" ? (
            <img alt="icon" className="img logo" src={lightLogo} />
          ) : (
            <img alt="icon" className="img logo" src={logo} />
          )}
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link>
              <Button>
                {state.isDark === "dark" ? (
                  <img
                    alt="icon"
                    className="sun"
                    onClick={toggleTheme}
                    src={sun}
                  />
                ) : (
                  <img
                    alt="icon"
                    className="moon"
                    onClick={toggleTheme}
                    src={moon}
                  />
                )}{" "}
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button
                className="navBth"
                onClick={() => {
                  dispatch(setTemperature(!state.isCelsius));
                }}
              >
                <span className={`cBtn ${state.isDark}`}>
                  {state.isCelsius ? "F" : "C"}°
                </span>
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ textDecoration: "none" }} to={"/"}>
                <Button>
                  <span className={`Btn ${state.isDark}`}>Home</span>
                </Button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ textDecoration: "none" }} to={"/favorites"}>
                <Button>
                  <span className={`Btn ${state.isDark}`}>Favorites</span>
                </Button>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
