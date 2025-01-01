import React, { useState } from "react";
import "./index.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  // State to toggle navigation visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the navigation bar
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { name: "Projects", href: "/" },
    { name: "About me", href: "/about" },
    { name: "Contact", href: "/contact" },
    {
      name: "Instagram",
      href: " https://www.instagram.com/mochris_creations/",
    },
    { name: "Whatsapp", href: " https://wa.me/2347012143026" },
    { name: "Behance", href: "https://www.behance.net/christianmoses4" },
    { name: "Dribble", href: "https://dribbble.com/Mochris-Creations" },
  ];

  return (
    <div style={{ padding: "20px 20px 0 20px" }}>
      {/* Button to open the nav */}
      <Logo />
      <div
        className="nav-button"
        style={{ paddingTop: "20px" }}
        onClick={toggleNav}
      >
        Menu ☰
      </div>{" "}
      *{/* Navigation Bar */}
      <div className={`nav-bar ${isOpen ? "open" : "close"}`}>
        <div className="close-button" onClick={toggleNav}>
          Close <span className="closeNav">✖</span>
        </div>
        <div>
          {/* <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.href}
                  style={{ fontSize: "2.5rem", textDecoration: "none" }}
                  onClick={toggleNav}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul> */}
          {/* <div
            className="content"
            style={{ height: "777px;", width: "calc(100% - 19px);" }}
          >
            <h5>Menu</h5>
            <ul>
              <li>
                <a href="/" className="active" data-page="home">
                  <i></i>Projects
                </a>
              </li>
              <li>
                <a href="about" data-page="about">
                  <i></i>About me
                </a>
              </li>
              <li>
                <a href="contact" data-page="contact">
                  <i></i>Contact
                </a>
              </li>
              <li>
                <a href="https://dribbble.com/damianwatracz" target="_blank">
                  <i></i>Dribbble
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/damianwatracz/"
                  target="_blank"
                >
                  <i></i>Instagram
                </a>
              </li>
              <li>
                <a href="https://www.behance.net/damianwatracz" target="_blank">
                  <i></i>Behance
                </a>
              </li>
            </ul>
          </div> */}

          <nav id="nav-overlay-content" className="on transition-end">
            <div>
              <div
                className="content"
                style={{ height: "777px;", width: "calc(100% - 19px);" }}
              >
                <h5 style={{ textAlign: "center" }}>Menu</h5>
                <ul className="nav_links">
                  {links.map((link, index) => (
                    <li key={index}>
                      <NavLink to={link.href} onClick={toggleNav}>
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
