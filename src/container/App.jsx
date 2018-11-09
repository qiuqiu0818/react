import React, { Component } from 'react';
import RouteView from "router"
import { BrowserRouter as Router } from "react-router-dom"

class App extends Component {
  render() {
    return(
      <div className="wrap">
      <Router>
        <RouteView/>
      </Router>
      </div>
    )
  }
}

export default App;
