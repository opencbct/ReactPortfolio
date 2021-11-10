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
                        <li>Build incredible front-end applications</li>
                        <li>Smooth & steady front-end workflow</li>
                        <li>Work well with teams & familiar with Git</li>
                        <li>Update data asynchronously with AJAX and backend API's</li>
                    </ul>
                    </div>
                    <div className="col-lg-6">
                    <img src="./images/StockSnap1.jpg" alt="office" style={styles.imageChange} /> 
                    </div>        
                </section> 
        </article>
    );
}

export default Focus;