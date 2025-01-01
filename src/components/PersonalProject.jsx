import { Link } from "react-router-dom";

const PortfolioItem = ({
  href,
  bgColor,
  imageSrc,
  imageAlt,
  year,
  title,
  projectName,
}) => (
  <div className="list-item-portfolio">
    <Link
      to={href}
      className="internal animate--me animate--init"
      style={{ backgroundColor: bgColor }}
      data-page={projectName}
    >
      <div
        className="lazyload-wrapper loaded"
        style={{ paddingBottom: "125.07462686567163%" }}
      >
        <img
          alt={imageAlt}
          className="lazy initial loaded"
          data-srcset={`${imageSrc}-480.jpg 480w, ${imageSrc}.jpg 670w`}
          data-src={`${imageSrc}.jpg`}
          srcSet={`${imageSrc}-480.jpg 480w, ${imageSrc}.jpg 670w`}
          src={`${imageSrc}.jpg`}
          data-was-processed="true"
        />
      </div>
      <strong className="regular dark-bg">
        <span className="h5">{year}</span>
        <span className="h2">{title}</span>
        <span className="more with-icon">
          <p>
            View Case Study
            <span className="icon icon-arrow-link-thin icon--on-right">
              <svg>
                <use xlinkHref="#icon_arrow_link--thin" />
              </svg>
            </span>
          </p>
        </span>
      </strong>
      <strong className="action">
        <span className="h5">{year}</span>
        <span className="h2">{title}</span>
        <span className="more with-icon">
          <p>
            View Case Study
            <span className="icon icon-arrow-link-thin icon--on-right">
              <svg>
                <use xlinkHref="#icon_arrow_link--thin" />
              </svg>
            </span>
          </p>
        </span>
      </strong>
    </Link>
  </div>
);

const PersonalProject = () => (
  <section className="home-portfolio" id="portfolio">
    <div className="wrapper">
      <div className="animate--me animate--init">
        <h5>Selected projects</h5>
        <h1 className="large">Case studies</h1>
      </div>
      <div className="list">
        <PortfolioItem
          href="/project"
          bgColor="#0f0f0f"
          imageSrc="/assets/images/tile_basicux"
          imageAlt="Basic UX"
          year="2018 — 2019"
          title="Basic UX — design resources for InVision Studio"
          projectName="PROJECT_BASICUX"
        />
        <PortfolioItem
          href="/project"
          bgColor="#21211e"
          imageSrc="/assets/images/tile_triniso"
          imageAlt="Triniso"
          year="2017"
          title="Triniso — responsive eCommerce website design"
          projectName="PROJECT_TRINISO"
        />
        <PortfolioItem
          href="/project"
          bgColor="#e6e6e6"
          imageSrc="/assets/images/tile_symova"
          imageAlt="Symova"
          year="2017"
          title="Symova — responsive website design"
          projectName="PROJECT_SYMOVA"
        />
        <PortfolioItem
          href="/project/pmr"
          bgColor="#009091"
          imageSrc="/assets/images/tile_pmr"
          imageAlt="PMR"
          year="2016 — 2018"
          title="PMR — online platform & website design"
          projectName="PROJECT_PMR"
        />
        <PortfolioItem
          href="/project/sonicsmith"
          bgColor="#4e4c4c"
          imageSrc="/assets/images/tile_sonicsmith"
          imageAlt="Sonicsmith"
          year="2016"
          title="Sonicsmith — responsive website design"
          projectName="PROJECT_SONICSMITH"
        />
        <PortfolioItem
          href="/project/lessdoing"
          bgColor="#4c58d9"
          imageSrc="/assets/images/tile_lessdoing"
          imageAlt="Less Doing"
          year="2015"
          title="Less Doing, More Living — responsive website design"
          projectName="PROJECT_LESSDOING"
        />
      </div>
    </div>
  </section>
);

export default PersonalProject;
