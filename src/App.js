import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Focus from "./pages/work";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/Focus" component={Focus} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Resume" component={Resume} />
        </Wrapper>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
