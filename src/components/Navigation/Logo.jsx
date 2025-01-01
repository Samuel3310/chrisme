import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  const [scrolly, setScrolly] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolly(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link to="/" className={`logocase ${scrolly ? "active" : ""}`}>
      <p className="logoname">Christian Moses</p>
      {/* <small>Graphics Designer</small> */}
    </Link>
  );
};

export default Logo;
