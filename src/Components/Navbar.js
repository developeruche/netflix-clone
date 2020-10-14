import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../image/Logo_Netflix.png";
function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  console.log(show);
  return (
    <div className={`navbar ${show && "nav__black"}`}>
      <img src={Logo} alt="Netflix Logo" className="nav_logo" />
      <img
        src="https://t4.ftcdn.net/jpg/01/28/56/33/240_F_128563397_RyDWoPr3xAlEcV7iFoGVuHkHI9NZSzyj.jpg"
        alt="Netflix Logo"
        className="nav_avatar"
      />
    </div>
  );
}

export default Navbar;
