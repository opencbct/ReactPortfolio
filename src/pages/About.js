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
                    <img src="./images/resumebackground.jpg"/> 
                </div>
                <div className="col-lg-6">
                    <h2 className="mt-5" >About:</h2>
                    <p>
                    I met dentists every day. It's all been like that for a little over the past decade. There's a lot of business between dentists and patients. 
          I try to find my business in it. The doctor needs an implant and an X-ray. And find a way for them to think about safe surgery. They don't move unless I provoke them. I don't worry about patients. 
          But the patient will be under my protection. This is why I see dentists every day.
                    </p>
                </div>
            </section> 
        </article>
    );
}

export default About;