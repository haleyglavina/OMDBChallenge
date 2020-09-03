import React from 'react';
import './Results.scss';
import Movie from '../Movie/Movie';
import {v4 as uuid} from 'uuid';

function Results({searchInput, currNoms, addNomination, movieLi}) {
  return (
    <div className="section__container">
      <h2 className="section__title">{`Results for "${searchInput}"`}</h2>
      <ul className="results__ul">
        {movieLi.map(movie => 
          <li key={uuid()}>
            <Movie 
              movie={movie} 
              currNoms={currNoms} 
              clickHandler={addNomination}
            />
          </li>
        )}
      </ul>
    </div>
  );
}

export default Results;