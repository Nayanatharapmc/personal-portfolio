import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from 'react';

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>I'm a third year undergraduate at department of Computer Science and Engineering at University of Moratuwa. I'm following a speciallized stream in Data Science and Engineering. I'm interested in Machine Learning and AI related technologies.</p>
            <Link to="/contact" >
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="imgContainer">
                <div className="img-stack top>">
                    <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg" className="img" alt="" />
                </div>
                <div className="img-stack bottom>">
                    <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg" className="img" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;
