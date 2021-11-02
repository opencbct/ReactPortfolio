import React from "react";

const styles = {
    imageChange: {
        boxShadow: "10px 10px 5px black",
        width: "100%",
        height: "auto",
    }
}

function About(){
    return(
        <article className="container-fluid">
            <section className="col-lg-6 mx-auto mb-5 pb-5">
                <div className="col-lg-6">
                    <img src="./images/me.png" alt="Ken Kopelson" style={styles.imageChange}/> 
                </div>
                <div className="col-lg-6">
                    <h2 className="mt-5" >About Me:</h2>
                    <p>
                        I love adventures. I like hiking. I love to game. I enjoy spending time with friends and family. I have a beautiful wife and daughter.
                        If you can't find me with those two I'm probably on my computer. Learning how to code has become my full time hobby.
                    </p>
                </div>
            </section> 
        </article>
    );
}

export default About;