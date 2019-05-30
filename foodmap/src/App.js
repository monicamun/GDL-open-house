import React from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import SplashPage from "./components/SplashPage";
import Home from "./components/Home";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Route path="/" component={SplashPage} exact />
          <Route path="/Home" component={Home} />
        </Router>
      </div>
    );
  }
}

export default App;