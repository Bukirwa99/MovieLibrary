import React from 'react';
import './App.css'
import './index.css'
import IMG1 from './images1.jpg'
import IMG2 from './images4.jpg'
import  IMG3 from './images5.jpg'
import IMG4 from './images8.jpg'
import {Link} from 'react-router-dom';
import Movie from './movie'


function Home(){
  return (
    <div>
    <nav className="Home please">
      <span>Movie Library</span>
      <button>Add movie</button>
<button> category</button>
    </nav>
    <header id="Home">
      <style>
        
    
        
      </style>
    <h1>Welcome</h1>
    <p>Are you in seacrh of that movie of your life?</p>
    <p>the library is here for you don't you<br />dare get frastrated</p>
    
    <table>
      <tr>
        <th>All movies</th>
      </tr>
      <tr>
        <td>click for more detials.</td>
      </tr>
      <tr>

        <td><Link exact to="/movie" > <img src ={IMG1} alt="hh"></img></Link> </td>
        <td><img src ={IMG2} alt="hh"></img></td>
        <td><img src={IMG3} alt="hh"></img></td>
        <td><img src ={IMG4} alt='hh'></img></td>
      </tr>
    </table>
    </header>
    </div>


 
    )
}
export default Home;
