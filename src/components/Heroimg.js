import "./HeroimgStyles.css";
import React from 'react';
import IntroImg from '../assets/img1.jpg';
import { Link } from 'react-router-dom';

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content"> 
            <p>HI, I'M A COMPUTER SCIENCE & ENGINEERING UNDERGRADUATE.</p>
            <h1>Machine Learning Enthusiast.</h1>
            <div>
                <Link to="/projects" className="btn">PROJECTS</Link>
                <Link to="/contact" className="btn-light">CONTACT</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg;
