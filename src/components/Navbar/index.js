import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"; 
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Navigation() {
  const [expanded, setExpanded] = useState(false);
    return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" expanded={expanded} >
      <Navbar.Brand>
        <Link className="navbar-brand" to="/">
          <./images/zirconia-drill.jpg/>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Link
              to="/about"
              className={window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
              onClick={() => setExpanded(false)}
            >
              ABOUT
            </Link>
            <Link
              to="/work"
              className={window.location.pathname === "/work" ? "nav-link active" : "nav-link"}
              onClick={() => setExpanded(false)}
              >
                WORK
            </Link>
            <Link
              to="/undergradeExperience"
              className={window.location.pathname === "/undergradeExperience" ? "nav-link active" : "nav-link"}
              onClick={() => setExpanded(false)}
            >
              UNDERGRADE EXPERIENCE
            </Link>
            <Link
              to="/resume"
              className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}
              onClick={() => setExpanded(false)}
            >
              RESUME
            </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }

  export default Navigation;