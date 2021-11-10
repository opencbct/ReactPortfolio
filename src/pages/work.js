import React from "react";

const styles = {
    imageChange: {
        boxShadow: "10px 10px 5px black",
        width: "100%",
        height: "auto",
    }
}

function Focus(){
    return(
        <article className="container-fluid">
                <section className="col-lg-6 mx-auto mb-5 pb-5">
                    <div className="col-lg-6">
                    <h2>My goal is to build a perfect mobile app that captures the beginning and end of dental implant surgery.</h2>
                    <p>I have the skills needed to be your full stack front end developer.</p>
                    <ul>
                        <li>Build professtional dental lab applications</li>
                        <li>A full stack software developer workflow Specialized in laboratory</li>
                    </ul>
                    </div>
                    <div className="col-lg-6">
                    <img src="./images/footer-sign.jpeg"/> 
                    </div>        
                </section> 
        </article>
    );
}

export default Focus;