import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./app.scss";
import Footer from "./components/Footer";
import About from "./components/About";
import SpaghettiWestern from "./components/Spaghetti-Western/SpaghettiWestern";
import Experience from "./components/Experience/Experience";

const App = () => {
    return (
      <Router>
        {/* APP STARTS */}
        <div className="App">
          {/* Wrapper starts */}
          <div className="wrapper">
            <Switch>

                {/* About */}
                <Route path="/" exact component={About} />

                {/* Spaghetti Western */}
                <Route path="/spaghetti-western" component={SpaghettiWestern} />

                {/* Experience */}
                <Route path="/experience" component={Experience} />
            </Switch>
            
            
          
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
