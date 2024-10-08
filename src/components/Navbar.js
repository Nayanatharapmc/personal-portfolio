import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; //import hamburger icon, fa is the category name
import React, { useState } from 'react';

const Navbar = () => {
  const [click, setClick] = useState(false); // Use useState directly
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false); // Use useState directly
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  }
  window.addEventListener('scroll', changeColor); // Trigger event changeColor when scrolling

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) :
          (<FaBars size={20} style={{ color: "#fff" }} />)}
      </div>
    </div>
  )
}

export default Navbar;
