import React from 'react';
import './Movie.scss';

function Movie({movie, currNoms}) {
  console.log("currNoms:",currNoms)
  console.log("movie in currNoms?", currNoms.filter(nom => (nom.Title === movie.Title) && (nom.Year === movie.Year)).length)
  return (
    <div className="movie">
      <p className="movie__text">{`${movie.Title} (${movie.Year})`}</p>
      {// Check if movie object is in current nominations list
        currNoms.filter(nom => (nom.Title === movie.Title) && (nom.Year === movie.Year)).length
        ? <button className="btn btn--inactive" disabled>Nominate</button>
        : <button className="btn" onClick={() => console.log("nominate!")}>Nominate</button>
      }
    </div>
  );
}

export default Movie;

// <button className={`btn ${currNoms.includes(movie) ? "btn--inactive" : null}`} >Nominate</button>