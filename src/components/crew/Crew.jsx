import { useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import Nav from "../nav/Nav";
import "./style.scss";

// import douglas from "../../data/assets/crew/image-douglas-hurley.png";
// import mark from "../../data/assets/crew/image-mark-shuttleworth.png";
// import victor from "../../data/assets/crew/image-victor-glover.png";
// import anousheh from "../../data/assets/crew/image-anousheh-ansari.png";

import data from "../../data/data.json";

export default function Crew() {
  const [crew] = useState(data.crew);
  const [value, setValue] = useState(0);
  // const [personas] = [douglas, mark, victor, anousheh];

  const { name, images, role, bio } = crew[value];

  return (
    <>
      <section className="crew">
        <Nav />
        <div className="crew__container container">
          <article className="crew__left">
            <h2>
              <span>02</span> MEET YOUR CREW
            </h2>
            <div className="crew__info">
              <h3>{role}</h3>
              <h2>{name}</h2>
              <p>{bio}</p>
            </div>
            <ul>
              {crew.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => setValue(index)}
                    className={`${index === value}`}
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
    </>
  );
}
