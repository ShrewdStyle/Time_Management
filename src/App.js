import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import TimeCalculator from "./components/Pages/TimeCalculator";
import Signup from "./components/Pages/Signup";
import Welcome from "./components/Pages/Welcome";
import Footer from "./components/Layout/Home/Footer/Footer";
import NotFound from "./components/Pages/NotFound";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/timecalculator" component={TimeCalculator} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signup/welcome" component={Welcome} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
