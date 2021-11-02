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
                            project={data.projects[0].project}
                            demonstration={data.projects[0].demonstration}
                            />
                           <Project 
                            _id={data.projects[1]._id}
                            cardTitle={data.projects[1].cardTitle}
                            cardText={data.projects[1].cardText}
                            src={data.projects[1].src}
                            alt={data.projects[1].alt}
                            github={data.projects[1].github}
                            project={data.projects[1].project}
                            demonstration={data.projects[1].demonstration}
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
                           <Project 
                            _id={data.projects[4]._id}
                            cardTitle={data.projects[4].cardTitle}
                            cardText={data.projects[4].cardText}
                            src={data.projects[4].src}
                            alt={data.projects[4].alt}
                            github={data.projects[4].github}
                            project={data.projects[4].project}
                            demonstration={data.projects[4].demonstration}
                            />
                        </div>
                    </section>
                </Tab>
                <Tab eventKey="BackEnd" title="Back-end">
                <section>
                        <div className="row">
                        <Project 
                            _id={data.projects[5]._id}
                            cardTitle={data.projects[5].cardTitle}
                            cardText={data.projects[5].cardText}
                            src={data.projects[5].src}
                            alt={data.projects[5].alt}
                            github={data.projects[5].github}
                            project={data.projects[5].project}
                            demonstration={data.projects[5].demonstration}
                            />
                           <Project 
                            _id={data.projects[6]._id}
                            cardTitle={data.projects[6].cardTitle}
                            cardText={data.projects[6].cardText}
                            src={data.projects[6].src}
                            alt={data.projects[6].alt}
                            github={data.projects[6].github}
                            project={data.projects[6].project}
                            demonstration={data.projects[6].demonstration}
                            />
                           <Project 
                            _id={data.projects[7]._id}
                            cardTitle={data.projects[7].cardTitle}
                            cardText={data.projects[7].cardText}
                            src={data.projects[7].src}
                            alt={data.projects[7].alt}
                            github={data.projects[7].github}
                            project={data.projects[7].project}
                            demonstration={data.projects[7].demonstration}
                            />
                           <Project 
                            _id={data.projects[8]._id}
                            cardTitle={data.projects[8].cardTitle}
                            cardText={data.projects[8].cardText}
                            src={data.projects[8].src}
                            alt={data.projects[8].alt}
                            github={data.projects[8].github}
                            project={data.projects[8].project}
                            demonstration={data.projects[8].demonstration}
                            />
                           <Project 
                            _id={data.projects[9]._id}
                            cardTitle={data.projects[9].cardTitle}
                            cardText={data.projects[9].cardText}
                            src={data.projects[9].src}
                            alt={data.projects[9].alt}
                            github={data.projects[9].github}
                            project={data.projects[9].project}
                            demonstration={data.projects[9].demonstration}
                            />
                        </div>
                    </section>
                </Tab>
                <Tab eventKey="Collaboration" title="Collaboration">
                <section>
                        <div className="row">
                        <Project 
                            _id={data.projects[10]._id}
                            cardTitle={data.projects[10].cardTitle}
                            cardText={data.projects[10].cardText}
                            src={data.projects[10].src}
                            alt={data.projects[10].alt}
                            github={data.projects[10].github}
                            project={data.projects[10].project}
                            demonstration={data.projects[10].demonstration}
                            />
                           <Project 
                            _id={data.projects[11]._id}
                            cardTitle={data.projects[11].cardTitle}
                            cardText={data.projects[11].cardText}
                            src={data.projects[11].src}
                            alt={data.projects[11].alt}
                            github={data.projects[11].github}
                            project={data.projects[11].project}
                            demonstration={data.projects[11].demonstration}
                            />
                        </div>
                    </section>
                </Tab>
                </Tabs>
            </div>
        </article>
    );
}

export default Portfolio;