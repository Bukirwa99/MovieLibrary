import IMG1 from'./images1.jpg'
import React from 'react';
import './App.css'
import './index.css'
import {Link} from 'react-router-dom';

function movie(){

    return(
        <div className="container">
            <nav className="movie">
                <span>Welcome to our site</span>

            </nav>
            <img id="movie-image" src={IMG1} alt="hh"></img>

            <div className="details">
                
                <h1>this movie was premiered in 2002 </h1>
                <p>For the years this movie has been rated the gratest in the straliers of 2002
                    It is a story based on sci-fi and believable facts about life and astronomy.
                </p>
                <p>This movie was directed by Marcus Deus of london.He has won best director for the past years of his direction</p>


            </div>

        </div>
        
    )
}
export default movie;
