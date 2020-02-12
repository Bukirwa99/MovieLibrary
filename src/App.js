import React from 'react';
import {BrowserRouter as Router ,Route,Switch,link}
from 'react-router-dom'
import './App.css';
import Home from './home'
import Movie from './movie'
function App() {
  return (<Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/movie" component={Movie}/>
    </div>
e
    </Router>);
}





export default App;
