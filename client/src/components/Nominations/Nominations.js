import React from 'react';
import './Nominations.scss';
import Movie from '../Movie/Movie';
import {v4 as uuid} from 'uuid';

function Nominations({currNoms, removeNomination}) {
  return (
    <div className="section__container section__container--noms">
      <h2 className="section__title">Nominations</h2>
      <ul className="noms__ul">
        {currNoms.map(movie => 
          <li className="noms__li" key={uuid()}>
            <Movie 
              movie={movie} 
              clickHandler={removeNomination}
            />
            <img className="noms__poster" src={movie.Poster} alt={movie.Title} />
          </li>
        )}
      </ul>
      
    </div>
  );
}

export default Nominations;