import React from 'react';
import './NomMovie.scss';

function NomMovie({movie, currNoms, addNomination}) {
  return (
    <div className="movie">
      <p className="movie__text">{`${movie.Title} (${movie.Year})`}</p>
      {inNominations()
        ? <button className="btn btn--inactive" disabled>Nominate</button>
        : <button className="btn" onClick={(movie) => addNomination(movie)}>Nominate</button>
      }
    </div>
  );
}

export default NomMovie;