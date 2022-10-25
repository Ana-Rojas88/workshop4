import React from "react";
import Nav from "../nav/Nav";
import "./style.scss";

export const Home = () => {
  return (
    <div className="homeContainer">
      <Nav />
      <div className="main container">
        <section className="main__info">
          <h1>
            So, you want to travel to<br></br>
            <span>SPACE</span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>
        <div className="main__buttonContainer">
          <button>
            <span>EXPLORE</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
