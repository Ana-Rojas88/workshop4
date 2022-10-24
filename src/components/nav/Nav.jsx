import React from "react";
import logo from "../../data/assets/shared/logo.svg";

import { NavLink } from "react-router-dom";
import "./style.scss";

export const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__left">
        <img src={logo}></img>
      </div>
      <div className="nav__right">
        <ul className="nav__list">
          <li>
            <NavLink style={{ textDecoration: "none" }} to="/">
              <span>00</span> Home
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: "none" }} to="destination">
              <span>01</span> Destination
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: "none" }} to="crew">
              <span>02</span> Crew
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: "none" }} to="technology">
              <span>03</span> Technology
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
