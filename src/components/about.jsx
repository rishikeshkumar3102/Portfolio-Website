import React from "react";
import rishi from "./Data/rishi.json";
const About = () => {
  return (
    <section className="box" id="about">
      <div className="fig">
        <img className="img" src={`/assets/${rishi.imgSrc}`} alt="hero" />
        <ul className="Items">
          <li className="Item">
            <div className="cube" data-aos="fade-left"
      data-aos-duration="1000">
              <h3>About me</h3>
              <p>Hey there! I'm Rishikesh Kumar, a B.Tech graduate in Computer Science and Engineering, currently working at Siemens. 
                I’m passionate about coding, web development, and leveraging technology to solve real-world problems. I’m always eager to learn, explore new tools, and grow as a developer in this ever-evolving tech landscape.
                 </p>
            </div>
          </li>
          <li className="Item">
            <div className="cube" data-aos="fade-left"
      data-aos-duration="1000">
              <h3>Education</h3>
              <p>I have completed my B.Tech in Computer Science from Siddaganga Institute of Technology, Tumkur. Before that, 
                I pursued my matriculation and intermediate education at Creane Memorial High School, Gaya.</p>
            </div>
          </li>
          <li className="Item">
            <div className="cube" data-aos="fade-left"
      data-aos-duration="1000">
              <h3>Hobbies</h3>
              <p>However, when I'm not buried in
                 lines of code, you'll often find
                  me out on the football field or planning my next adventure.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
