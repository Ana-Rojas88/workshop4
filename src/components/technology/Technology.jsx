import { useState } from "react";
import Nav from "../nav/Nav";
import "./style.scss";
import data from "../../data/data.json";

export const Technology = () => {
  const [technology] = useState(data.technology);
  const [value, setValue] = useState(0);

  const { name, images, description } = technology[value];
  return (
    <div className="technologyContainer">
      <Nav />
      <section className="technology">
        <div>
          <article className="">
            <h2 className="title">
              03
              <span>Space Launch 101</span>
            </h2>

            <div>
              <article className="item">
                <ul>
                  {technology.map((item, index) => (
                    <li key={index}>
                      <button onClick={() => setValue(index)}>
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="info">
                <h3>The terminology...</h3>

                <h2>{name}</h2>

                <p>{description}</p>
              </article>
            </div>
          </article>

          <article className="img">
            <img src={images.portrait} alt={name} />
          </article>
        </div>
      </section>
    </div>
  );
};

export default Technology;
