import React from "react";
import moon from "../../data/assets/destination/image-moon.png";
import Nav from "../nav/Nav";
import "./style.scss";

export const Destination = () => {
  return (
    <div className="destinationContainer">
      <Nav />
      <div>
        <h2> 01 PICK YOUR DESTINATION</h2>
        <img src={moon}></img>
      </div>
      <div>
        <nav>
          <ul>
            <li>Moon</li>
            <li>Mars</li>
            <li>Europa</li>
            <li>Titan</li>
          </ul>
        </nav>
        <h2>MOON</h2>
        <p>
          See our planet as you've never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <div>
          <p>
            <span>AVG DISTANCE</span>
            384,400 KM
          </p>
          <p>
            <span>EST.TRAVEL TIME</span>
            384,400 KM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Destination;
