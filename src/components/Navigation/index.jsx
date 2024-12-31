import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

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
    { name: "Instagram", href: "/various" },
  ];

  return (
    <div>
      {/* Button to open the nav */}
      <div className="nav-button" onClick={toggleNav}>
        Menu ☰
      </div>

      {/* Navigation Bar */}
      <div className={`nav-bar ${isOpen ? "open" : "close"}`}>
        <div className="close-button" onClick={toggleNav}>
          Close <span className="closeNav">✖</span>
        </div>
        <div>
          <p
            style={{
              textAlign: "center",
              fontSize: "2.5rem",
              marginBottom: "30px",
            }}
          >
            Menu
          </p>
          <ul>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
