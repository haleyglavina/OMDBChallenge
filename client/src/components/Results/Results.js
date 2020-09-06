import React from 'react';
import './Results.scss';
import Movie from '../Movie/Movie';
import {v4 as uuid} from 'uuid';

function Results({searchInput, currNoms, addNomination, movieLi, setMovieLi}) {

  //setMovieLi(searchInput ? movieLi.filter(movie => movie.Title.includes(searchInput)) : []);
  //console.log("movieLi:", movieLi);
  if (!movieLi) {
    return (
      <div className="section__container">
      <h2 className="section__title">{`Results for "${searchInput}"`}</h2>
      <p className="section__caption">Please search for a title.</p>
    </div>
    )
  }

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