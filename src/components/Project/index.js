import React from "react";
import "./style.css";

function Project(props) {
    let project = "d-flex";
    let demonstration = "d-flex";
    if(props.project === ""){
        project = "d-none"
    }
    if(props.demonstration === ""){
        demonstration = "d-none"
    }
  return (
    <div className="col-lg-6 card">                            
        <div className="card-body">
            <h5 className="card-title">{props.cardTitle}</h5>
            <p className="card-text">{props.cardText}</p>
            <img src={props.src} className="card-img mb-3" alt={props.alt}/>
            <a href={props.github} target="_blank"  rel="noreferrer" className="btn btn-dark d-flex align-items-end mb-3">Github Repository</a>
            <a href={props.project} target="_blank"  rel="noreferrer" className={"btn btn-dark  align-items-end " + project}>Deployed Project</a>
            <a href={props.demonstration} target="_blank"  rel="noreferrer" className={"btn btn-dark  align-items-end " + demonstration}>Demonstration</a>
        </div>
    </div>
  )
}

export default Project;
