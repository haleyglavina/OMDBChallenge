import React from 'react';

function Movie({movie}) {
  return (
    <div className="movie">
      <p className="movie__text">{`${movie.Title} (${movie.Year})`}</p>
      <button className="btn btn--nominate">Nominate</button>
    </div>
  );
}

export default Movie;