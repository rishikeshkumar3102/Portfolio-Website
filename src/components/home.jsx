import React, { useEffect, useRef} from "react";
import pdf from "../pdf/Resume.pdf";
import hero from "./Data/hero.json";
import Typed from "typed.js";


const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "Rishikesh Kumar",
        "B.E in Computer Science",
        "Currently working at Siemens",
        "Full stack developer",
        "Passionate programmer with a fervent dedication to coding.",
        "Footballer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="zoom-in"
      data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a
            href={pdf}
            download="Resume.pdf"
            className="btn
         btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" >
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
