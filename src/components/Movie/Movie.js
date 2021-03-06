import React from 'react';
import './Movie.scss';

function Movie({movie, currNoms, clickHandler}) {
  
  // Movie in Results section
  if (currNoms) {  
    const inNominations = () => {
      // Check if movie object is in current nominations list
      return currNoms.filter(nom => (nom.Title === movie.Title) && (nom.Year === movie.Year)).length
    }

    return (
      <div className="movie">
        <div className="movie__text">
          <p className="movie__title">{`${movie.Title}`}</p>
          <p className="movie__year">{`${movie.Year}`}</p>
        </div>
        {inNominations()
          ? <button className="btn btn--inactive" disabled>Nominate</button>
          : <button className="btn" onClick={() => clickHandler(movie)}>Nominate</button>
        }
      </div>
    );
  }

  // Movie in nominations section
  return (
    <div className="movie movie--noms">
      <div className="movie__text">
        <p className="movie__title">{`${movie.Title}`}</p>
        <p className="movie__year">{`${movie.Year}`}</p>
        <button className="btn" onClick={() => clickHandler(movie)}>Remove</button>
      </div>
    </div>
  );
    
}

export default Movie;