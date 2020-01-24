import React from 'react';
import {BrowserRouter as Router ,Route,Switch,link}
from 'react-router-dom'
import './App.css';
import Home from './home'


function App() {
  return (<Router>
    <div>
      <Route path="/home"component={Home}/>
    </div>

  </Router> )
    
    
  

}





export default App;
