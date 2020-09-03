import React from 'react';
import './Nominations.scss';
import Movie from '../Movie/Movie';
import {v4 as uuid} from 'uuid';

function Nominations({currNoms, removeNomination}) {
  return (
    <div className="section__container">
      <h2 className="section__title">Nominations</h2>
      <ul className="noms__ul">
        {currNoms.map(movie => 
          <li key={uuid()}>
            <Movie 
              movie={movie} 
            />
          </li>
        )}
      </ul>
      
    </div>
  );
}

export default Nominations;