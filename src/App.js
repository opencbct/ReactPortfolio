import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Work from "./pages/work";
import UndergradeExperience from "./page/undergradeExperience";
import Resume from "./pages/Resume";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Wrapper>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/undergardeExperience" component={UndergradeExperience} />
          <Route exact path="/resume" component={Resume} />
        </Wrapper>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
