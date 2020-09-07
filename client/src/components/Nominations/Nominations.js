import React from 'react';
import './Nominations.scss';
import Movie from '../Movie/Movie';
import NominationBanner from '../NominationBanner/NominationBanner';

function Nominations({currNoms, removeNomination}) {
  return (
    <div className="section__container section__container--noms">
      <h2 className="section__title">Nominations</h2>
      {currNoms.length >= 5 
        ? <NominationBanner /> 
        : null}
      <ul className="noms__ul">
        {currNoms.map(movie => 
          <li className="noms__li" key={movie.imdbID}>
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