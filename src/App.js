import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./app.scss";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js";




class App extends Component {
  constructor() {
    super()
    this.state = {
      showHamburger: false
      }
  }
  


  render() {
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

            {/* Home */}
            <Route path="/about" component={About} />
          
            {/* Footer */}
            <Footer />
          {/* Wrapper ends */}
          </div>
          

        {/* APP ENDS */}
        </div>
      </Router>
    );
  }
}

export default App;
