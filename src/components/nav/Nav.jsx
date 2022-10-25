import React from "react";
import logo from "../../data/assets/shared/logo.svg";

import { NavLink } from "react-router-dom";
import "./style.scss";

export const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__left">
        <img src={logo} alt="logo"></img>
        <span>━━━━━━━━━━━━━━━━━━━━━</span>
      </div>
      <ul className="nav__list">
        <li>
          <NavLink style={{ textDecoration: "none", color: "white" }} to="/">
            <span>00</span> HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/destination"
          >
            <span>01</span> DESTINATION
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/crew"
          >
            <span>02</span> CREW
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/technology"
          >
            <span>03</span> TECHNOLOGY
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
