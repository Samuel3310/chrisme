import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="wrapper">
        <div className="row">
          <div className="col-sm-6-6 col-md-12-12 col-smd-12-12 col-lg-4-12 contact">
            <h3>
              Contact <br />
              information &nbsp;
            </h3>
            <p>
              Feel free to reach out to me any time. I prefer to talk over
              email, especially since we may be a few time zones away.
            </p>
            <ul className="contact-links">
              <li>
                E:{" "}
                <a className="special" href="mailto:damian.watracz@gmail.com">
                  damian.watracz@gmail.com
                </a>
              </li>
              <li>
                P:{" "}
                <span className="gray-darkest" content="noindex">
                  +48-517-512-348
                </span>
              </li>
            </ul>
          </div>
          <div className="col-sm-6-6 col-md-6-12 col-smd-6-12 col-lg-2-12 col-lg-offset-1-12">
            <h3>
              Latest <br />
              projects&nbsp;—
            </h3>
            <ul className="project-links">
              <li>
                <a href="project/iceland.html" className="special internal">
                  Iceland
                </a>
              </li>
              <li>
                <a href="project/basicux.html" className="special internal">
                  Basic UX
                </a>
              </li>
              <li>
                <a href="project/triniso.html" className="special internal">
                  Triniso
                </a>
              </li>
              <li>
                <a href="project/symova.html" className="special internal">
                  Symova
                </a>
              </li>
              <li>
                <a href="project/pmr.html" className="special internal">
                  PMR
                </a>
              </li>
              <li>
                <a href="project/sonicsmith.html" className="special internal">
                  Sonicsmith
                </a>
              </li>
              <li>
                <a href="project/photography.html" className="special internal">
                  Photography
                </a>
              </li>
              <li>
                <a href="index.html" className="special internal">
                  All projects
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6-6 col-md-3-12 col-smd-3-12 col-lg-2-12">
            <h3>
              Current <br />
              availability&nbsp;—
            </h3>
            <p>
              I usually work on several projects but I’ll be happy to discuss
              new opportunities. Let’s get in touch!
            </p>
          </div>
          <div className="col-sm-6-6 col-md-3-12 col-smd-3-12 col-lg-2-12 col-lg-offset-1-12">
            <h3>
              Follow <br />
              me on&nbsp;—
            </h3>
            <ul className="social-links">
              <li>
                <a
                  href="https://dribbble.com/damianwatracz"
                  className="special"
                  target="_blank"
                >
                  Dribbble
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/damianwatracz"
                  className="special"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/damianwatracz"
                  className="special"
                  target="_blank"
                >
                  Behance
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/damianwatracz"
                  className="special"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6-6 col-md-12-12 col-smd-12-12 col-lg-12-12 copyright">
            <a href="home.html" className="internal">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="46px"
                height="46px"
                viewBox="0 0 46 46"
                enableBackground="new 0 0 46 46"
                space="preserve"
              >
                <path
                  fill="#cfd0d2"
                  d="M22.953,0A23,23,0,1,0,45.909,23,22.978,22.978,0,0,0,22.953,0Zm0,43A20,20,0,1,1,42.915,23,19.981,19.981,0,0,1,22.953,43Zm5.055-16.727L24.83,16.009h-3.5l-3.178,10.24-2.529-10.24H11.99L16.162,32H19.75l3.286-10.6L26.3,32h3.523L34,16.009h-3.5Z"
                ></path>
              </svg>
            </a>
            <p className="small copyright-text">
              © 2008 — 2019 Damian Watracz.
              <br />
              Made with{" "}
              <span className="icon icon-heart">
                <svg>
                  <use xlinkHref="#icon_heart"></use>
                </svg>
              </span>{" "}
              in Kraków, Poland.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
