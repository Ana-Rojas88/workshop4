import  { useState } from "react";
import Nav from "../nav/Nav";
import "./style.scss";
import data from "../../data/data.json";

export const Destination = () => {

  const [planets] = useState(data.destinations)
  const [value, setValue] = useState(0)

  const { name, images, description, distance, travel } = planets[value]
  return (
    <div className="destinationContainer">
      <Nav />
      <section>
        <div className="destination">
          <article className="article" >
            <h2 className="title">
              01
              <span>Pick your destination</span>
            </h2>

            <img className="img"
              src={images.png}
              alt={name}
              title={name}
            
            />
          </article>

          <article className="item2">
            <ul >
              {planets.map((item, index) => (
                <li key={index} className="mr-5">
                  <button
                    onClick={() => setValue(index)}
                    className={`uppercase font-semibold tracking-wider text-gray-200 pb-2 border-b border-transparent ${
                      index === value && "border-b border-white"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

            <h2 className="name">
              {name}
            </h2>

            <p>
              {description}
            </p>

            <ul className="distance-travel">
              <li>
                Avg. Distance<span>{distance}</span>
              </li>
              <li>
                Est. travel time<span>{travel}</span>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Destination;
