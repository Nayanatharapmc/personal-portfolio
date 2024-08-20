import "./WorkCardStyles.css";
import React from 'react';
import { NavLink } from "react-router-dom";


const WorkCard = (props) => {
  return (
    <div className="project-card">
        <img src = {props.imgsrc} className="project-img"/>
            <h2 className="project-title">{props.title}</h2>
            <div className="project-details">
                <p className="project-description">{props.description}</p>
                <div className="project-buttons"> 
                    <NavLink to={props.view} className={"btn"}>VIEW</NavLink>
                    <NavLink to={props.source} className={"btn"}>SOURCE</NavLink>
                </div>
            </div>
    </div>
  )
}

export default WorkCard;
