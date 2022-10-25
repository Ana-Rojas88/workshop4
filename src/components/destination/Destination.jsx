import { useState } from "react";
import Nav from "../nav/Nav";
import "./style.scss";
import data from "../../data/data.json";

export const Destination = () => {
  const [planets] = useState(data.destinations);
  const [value, setValue] = useState(0);

  const { name, images, description, distance, travel } = planets[value];
  return (
    <div className="destinationContainer">
      <Nav />
      <section>
        <div className="destination">
          <article className="article">
            <h2 className="title">
              01
              <span>PICK YOUR DESTINATION</span>
            </h2>

            <img className="img" src={images.png} alt={name} title={name} />
          </article>

          <article className="item2">
            <ul className="navMenu">
              {planets.map((item, index) => (
                <li key={index}>
                  <button onClick={() => setValue(index)}>{item.name}</button>
                </li>
              ))}
            </ul>

            <h2 className="name">{name}</h2>

            <p>{description}</p>
            <hr />

            <ul className="distance-travel">
              <li className="avgDistance">
                Avg. Distance
                <span>
                  <br></br>
                  {distance}
                </span>
              </li>
              <li className="travelTime">
                Est. travel time
                <span>
                  <br></br>
                  {travel}
                </span>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Destination;
