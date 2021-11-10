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
          <img src="./images/logo.jpg" alt="logo" style={{width:"50px", height:"50px"}}/>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Link
              to="/"
              className={window.location.pathname === "/" || window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
              onClick={() => setExpanded(false)}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
              onClick={() => setExpanded(false)}
              >
                ABOUT
            </Link>
            <Link
              to="/work"
              className={window.location.pathname === "/work" ? "nav-link active" : "nav-link"}
              onClick={() => setExpanded(false)}
            >
              FOCUS
            </Link>
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
              onClick={() => setExpanded(false)}
            >
              PORTFOLIO
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