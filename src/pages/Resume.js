import React from "react";

const styles= {
    imageChange: {
        boxShadow: "10px 10px 5px black",
        width: "100%",
        height: "auto",
    }
}

function Resume(){
    return(
        <article className="container-fluid">
            <section className="col-lg-4 mx-auto text-center mb-5">
                <img src="./images/tree1.jpg" alt="tree" style={styles.imageChange}/>
                <h2 className="mt-5">Dig a little deeper.</h2>
                <a href="./data/benjaminKim_Resume.pdf" alt="PDF of Resume" target="_blank" rel="noreferrer" className="btn btn-dark">Resume</a>
            </section>
        </article>
    );
}

export default Resume;