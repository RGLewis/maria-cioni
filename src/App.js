import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./app.scss";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import SpaghettiWestern from "./components/Spaghetti-Western.js";

const App = () => {
    return (
      <Router>
        {/* APP STARTS */}
        <div className="App">
          {/* Wrapper starts */}
          <div className="wrapper">
            {/* Nav */}
            <Nav />
            
            {/* Home */}
            <Route path="/" exact component={Home} />

            {/* About */}
            <Route path="/about" exact component={About} />

            {/* Spaghetti Western */}
            <Route path="/spaghetti-western" exact component={SpaghettiWestern} />
          
            {/* Footer */}
            <Footer />
          {/* Wrapper ends */}
          </div>
          

        {/* APP ENDS */}
        </div>
      </Router>
    );
}

export default App;
