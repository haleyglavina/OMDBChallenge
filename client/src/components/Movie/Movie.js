import React from 'react';
import './Movie.scss';

function Movie({movie, currNoms, clickHandler}) {

  // Movie in nominations section
  if (!currNoms) {
    return (
      <div className="movie">
      <p className="movie__text">{`${movie.Title} (${movie.Year})`}</p>
      <button className="btn" onClick={() => clickHandler(movie)}>Remove</button>
    </div>
    );
  }
  
  // Movie in Results section
  const inNominations = () => {
    // Check if movie object is in current nominations list
    return currNoms.filter(nom => (nom.Title === movie.Title) && (nom.Year === movie.Year)).length
  }

  return (
    <div className="movie">
      <p className="movie__text">{`${movie.Title} (${movie.Year})`}</p>
      {inNominations()
        ? <button className="btn btn--inactive" disabled>Nominate</button>
        : <button className="btn" onClick={() => clickHandler(movie)}>Nominate</button>
      }
    </div>
  );
}

export default Movie;