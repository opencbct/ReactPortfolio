import React from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import "./Portfolio.css";
import Project from "../components/Project";
import data from "../data/project.json";

function Portfolio(){
    return(
        <article className="row page tab-pane fade show mx-auto mb-5">
            <div className="col-lg-6 mx-auto text-center">
                <h2>Portfolio</h2>
                <p>Choose a type of project you would like to explore.</p> 
                <Tabs className="myClass" defaultActiveKey="frontEnd">
                <Tab eventKey="frontEnd" title="Front-end">
                <section>
                        <div className="row">
                            <Project 
                            _id={data.projects[0]._id}
                            cardTitle={data.projects[0].cardTitle}
                            cardText={data.projects[0].cardText}
                            src={data.projects[0].src}
                            alt={data.projects[0].alt}
                            github={data.projects[0].github}
                            />
                           <Project 
                            _id={data.projects[1]._id}
                            cardTitle={data.projects[1].cardTitle}
                            cardText={data.projects[1].cardText}
                            src={data.projects[1].src}
                            alt={data.projects[1].alt}
                            github={data.projects[1].github}
                            />
                            <Project 
                            _id={data.projects[2]._id}
                            cardTitle={data.projects[2].cardTitle}
                            cardText={data.projects[2].cardText}
                            src={data.projects[2].src}
                            alt={data.projects[2].alt}
                            github={data.projects[2].github}
                            project={data.projects[2].project}
                            demonstration={data.projects[2].demonstration}
                            />
                           <Project 
                            _id={data.projects[3]._id}
                            cardTitle={data.projects[3].cardTitle}
                            cardText={data.projects[3].cardText}
                            src={data.projects[3].src}
                            alt={data.projects[3].alt}
                            github={data.projects[3].github}
                            project={data.projects[3].project}
                            demonstration={data.projects[3].demonstration}
                            />
                        </div>
                    </section>
                </Tab>
                <Tab eventKey="BackEnd" title="Back-end">
                </Tab>
                <Tab eventKey="Collaboration" title="Collaboration">
                </Tab>
                </Tabs>
            </div>
        </article>
    );
}

export default Portfolio;