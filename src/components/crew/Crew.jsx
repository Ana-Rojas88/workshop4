import React from "react";
import person1 from "../../data/assets/crew/image-douglas-hurley.png";
import Nav from "../nav/Nav";
import "./style.scss";

export const Crew = () => {
  return (
    <div className="crewContainer">
      <Nav />
      <div>
        <h2>02 MEET YOUR CREW</h2>
      </div>
      <div>
        <h2>COMMANDER</h2>
        <h2></h2>
      </div>
    </div>
  );
};

export default Crew;
