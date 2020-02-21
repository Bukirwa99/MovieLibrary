import React from 'react';
import {BrowserRouter as Router ,Route,Switch,link}
from 'react-router-dom'
import './App.css';
import {BrowserRouter as Router, Route  } from "react-router-dom";
import Home from './home'
function App() {
  return (<Router>
    <div>
      <Route exact path="/"component={Home}/>
    </div>
e
    </Router>);
}





export default App;
