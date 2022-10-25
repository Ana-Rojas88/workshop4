// // import { useState } from "react";
// // import { BsCircleFill } from "react-icons/bs";
// // import person1 from "../../data/assets/crew/image-douglas-hurley.png";
// import Nav from "../nav/Nav";
// import "./style.scss";
// import { crew } from "../../data/crew.js";

// export default function Crew() {
//   // const crew = data.crew;
//   //console.log(crew);
//   //const [crew] = useState(data.crew);
//   //const [value, setValue] = useState(0);

//   // const { name, images, role, bio } = crew[value];
//   return (
//     <section className="crew">
//       <Nav />
//       <div className="crew__container">
//         <article className="crew__left">
//           <h2>02 MEET YOUR CREW</h2>
//           <ul>
//             {crew.map((item, index) => (
//               <li key={index}>
//                 <h3>{item.role}</h3>
//                 <h2>{item.name}</h2>
//                 <p>{item.bio}</p>
//                 <img src={item.images.png} alt={item.name} title={item.name} />
//               </li>
//             ))}
//           </ul>
//           {/* <ul>
//             {crew.map((item, index) => (
//               <li key={index} className="">
//                 <button
//                   onClick={() => setValue(index)}
//                   className={`gray ${index === value && "white"}`}
//                 >
//                   <BsCircleFill />
//                 </button>
//               </li>
//             ))}
//           </ul>  */}
//         </article>
//         <article>{/*  */}</article>
//       </div>
//     </section>
//   );
// }
