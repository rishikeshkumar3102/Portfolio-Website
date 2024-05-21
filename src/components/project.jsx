import React from "react";
import project from "./Data/projects.json";

const Project = () => {
  return (
    <div className="container project-my-3" style={{ marginTop: '4rem' }} id="project">
      <h1 className="text-center">PROJECTS</h1>
      <div className="row d-flex justify-content-center align-content-center">
        {project.map((data) => (
          <div key={data.id} className="my-4 col-12 col-sm-6 col-md-4 col-lg-3 mx-4">
            <div
              className="card bg-black text-light"
              style={{
                width: "100%",
                border: "1px solid yellow",
                boxShadow: "5px 5px 10px 10px rgba(156, 10, 175, 0.5)",
              }}
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <div className="img-container d-flex justify-content-center align-items-center">
                <img
                  src={`/assets/${data.imageSrc}`}
                  className="card-img-top"
                  alt={data.title}
                  style={{ width: '100%', height: 'auto' }} // Ensure images are responsive
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <div className="d-flex justify-content-center">
                  <a href={data.demo} className="btn btn-primary mx-2">
                    Demo
                  </a>
                  <a href={data.source} className="btn btn-warning mx-2">
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
