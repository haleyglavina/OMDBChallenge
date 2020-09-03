import React from 'react';
import './Search.scss';

function Search({handleSearchChange}) {
  return (
    <div className="section__container">
      <form className="search__form">
        <label className="search__label" htmlFor="movie-search">Movie Title</label>
        <div className="search__input-box">
          <input 
            className="search__input" 
            type="text" 
            id="movie-search" 
            name="movie-search"
            autoComplete="off" 
            onChange={e => handleSearchChange(e.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
}

export default Search;