import "./WorkCardStyles.css";
import React from 'react';
import project1 from '../assets/Homepage.png';
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src = {project1} className="project-img"/>
                <h2 className="project-title">Airline-Reservation-System</h2>
                <div className="project-details">
                    <p className="project-description">This system is our Semester 3 group project for Database Management Systems module. This online platform allows users to register, login, search and book flights online safetly and conveniently.</p>
                    <div className="project-buttons"> 
                        <NavLink to="https://github.com/Nayanatharapmc/Airline_Reservation_System" className={"btn"}>VIEW</NavLink>
                        <NavLink to="https://github.com/Nayanatharapmc/Airline_Reservation_System" className={"btn"}>SOURCE</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard
