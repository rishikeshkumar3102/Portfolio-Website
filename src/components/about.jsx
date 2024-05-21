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
              <p>Hey there! I'm Rishikesh Kumar, an engineering student with a passion
                 for coding, web development, and exploring new technologies.
                 From building efficient algorithms to creating responsive websites, 
                 I love the challenge of solving problems and bringing ideas to life through code.
                 </p>
            </div>
          </li>
          <li className="Item">
            <div className="cube" data-aos="fade-left"
      data-aos-duration="1000">
              <h3>Education</h3>
              <p>I'm currently pursuing my B.E. degree in 
                Computer Science from Siddaganga Institute
                 of Technology,Tumkur.
                 Before SIT, I completed my matriculation and 
                 intermediate education at Creane Memorial High School,Gaya.</p>
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
