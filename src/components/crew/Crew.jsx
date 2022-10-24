import { useState } from "react";
import { BsCircleFill } from "react-icons/bs";
//import person1 from "../../data/assets/crew/image-douglas-hurley.png";
import Nav from "../nav/Nav";
import "./style.scss";
import data from "../../data/data.json";

export default function Crew() {
  const [crew] = useState(data.crew);
  const [value, setValue] = useState(0);

  const { name, images, role, bio } = crew[value];
  return (
    <section className="crew">
      <Nav />
      <div className="crew__container">
        <article className="crew__left">
          <h2>02 MEET YOUR CREW</h2>
          <h3>{role}</h3>

          <h2>{name}</h2>
          <p>{bio}</p>
          <ul>
            {crew.map((item, index) => (
              <li key={index} className="mr-5">
                <button
                  onClick={() => setValue(index)}
                  className={`gray ${index === value && "white"}`}
                >
                  <BsCircleFill />
                </button>
              </li>
            ))}
          </ul>
        </article>
        <article>
          <img src={images.png} alt={name} title={name} />
        </article>
      </div>
    </section>
  );
}
