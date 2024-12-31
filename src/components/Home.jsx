import React from "react";

// Dummy data for the projects (you can fetch or dynamically generate this)
const projects = [
  {
    id: "iceland",
    title: "Iceland — landscapes & vistas",
    year: "2019",
    imgSrc: "/assets/images/tile_iceland.jpg",
    imgSrcSet:
      "/assets/images/tile_iceland-480.jpg 480w, /assets/images/tile_iceland.jpg 670w",
    backgroundColor: "#e4e4e4",
    newLabel: true,
  },
  {
    id: "photography",
    title: "Photography",
    year: "2013 — 2019",
    imgSrc: "/assets/images/tile_photography.jpg",
    imgSrcSet:
      "/assets/images/tile_photography-480.jpg 480w, /assets/images/tile_photography.jpg 670w",
    backgroundColor: "#ededed",
    newLabel: true,
  },
  {
    id: "pencildrawings",
    title: "Drawings",
    year: "2008 — 2010",
    imgSrc: "/assets/images/tile_pencildrawings.jpg",
    imgSrcSet:
      "/assets/images/tile_pencildrawings-480.jpg 480w, /assets/images/tile_pencildrawings.jpg 670w",
    backgroundColor: "#ededed",
    newLabel: false,
  },
];

const Portfolio = () => {
  return (
    <section className="home-portfolio personal">
      <div className="wrapper">
        <div className="animate--me animate--init">
          <h5>Photography &amp; drawings</h5>
          <h1 className="large">Personal projects</h1>
        </div>
        <div className="list">
          {projects.map((project) => (
            <div key={project.id} className="list-item-portfolio">
              <a
                href={`project/${project.id}`}
                className={`internal animate--me animate--init ${
                  project.newLabel ? "new" : ""
                }`}
                style={{ backgroundColor: project.backgroundColor }}
                data-page={`PROJECT_${project.id.toUpperCase()}`}
              >
                {project.newLabel && <i className="new dark-bg">new</i>}
                <svg viewBox="0 0 100 100" className="circle">
                  <circle cx="50" cy="50" r="47" strokeWidth="6"></circle>
                </svg>
                <div
                  className="lazyload-wrapper loaded"
                  style={{ paddingBottom: "82.08955223880598%" }}
                >
                  <img
                    alt={project.title}
                    className="lazy loaded"
                    data-srcset={project.imgSrcSet}
                    data-src={project.imgSrc}
                    srcSet={project.imgSrcSet}
                    src={project.imgSrc}
                    data-was-processed="true"
                  />
                </div>
                <strong className="regular light-bg">
                  <span className="h5">{project.year}</span>
                  <span className="h2">{project.title}</span>
                  <span className="more with-icon">
                    <p>
                      View Project
                      <span className="icon icon-arrow-link-thin icon--on-right">
                        <svg>
                          <use xlinkHref="#icon_arrow_link--thin"></use>
                        </svg>
                      </span>
                    </p>
                  </span>
                </strong>
                <strong className="action">
                  <span className="h5">{project.year}</span>
                  <span className="h2">{project.title}</span>
                  <span className="more with-icon">
                    <p>
                      View Project
                      <span className="icon icon-arrow-link-thin icon--on-right">
                        <svg>
                          <use xlinkHref="#icon_arrow_link--thin"></use>
                        </svg>
                      </span>
                    </p>
                  </span>
                </strong>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
