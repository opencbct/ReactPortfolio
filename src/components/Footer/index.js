import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="fixed-bottom navbar navbar-light bg-light">
       {/* <!-- Copyright --> */}
                <small>© 2021 Benjamin Kim.</small>  
            {/* <!-- link to facebook --> */}
            <a href="http://www.facebook.com/benjamin_kim" target="_blank" rel="noreferrer" >
                <img src="./images/facebook.jpg" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            </a>
            {/* <!-- link to linkedin --> */}
            <a href="http://www.linkedin.com/in/benjamin_kim" target="_blank" rel="noreferrer" >
                <img src="./images/linkedin.jpg" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            </a>
            {/* <!-- link to email --> */}
            <a href="mailto:opencbct@gmail.com" target="_blank" rel="noreferrer" >
                <img src="./images/email.jpg" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            </a>
    </footer>
  );
}

export default Footer;
