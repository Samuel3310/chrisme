import React from "react";

const HomePage = () => {
  return (
    <section className="home-top" style={{ minHeight: "0px" }}>
      <img
        src="assets/images/bg_home_2.svg"
        alt="designer."
        className="bg-title"
      />
      <div className="bg-image loaded" style={{ opacity: 1 }}>
        <img
          srcSet="assets/images/bg_home.png 1x, assets/images/bg_home_@2x.png 2x"
          alt="Background"
        />
      </div>
      <div className="wrapper">
        <div className="row">
          <div className="main-copy">
            <h5>Christian Moses</h5>
            <h1 className="large">Graphic and brand Identity designer</h1>
            <h3 className="header-light">
              As a Graphic and Brand designer with over 7 years of experience,
              I've served as an brand director and designer, collaborating with
              major companies and emerging startups to help them realize their
              full potential and attract new customers.
            </h3>

            <nav className="links">
              <h4>
                <a href="#portfolio" className="scroll-to special">
                  View Projects
                </a>
              </h4>
              <span>or</span>
              <h4>
                <a href="about" className="internal special">
                  Read About Me
                </a>
              </h4>
            </nav>
          </div>
        </div>
        <a href="#portfolio" className="scroll-to toggle animate special">
          <div className="scroll-to-icon"></div>
        </a>
      </div>
    </section>
  );
};

export default HomePage;
