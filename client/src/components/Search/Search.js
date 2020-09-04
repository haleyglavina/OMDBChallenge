import React from 'react';
import './Search.scss';

function Search({handleSearchChange}) {
  return (
    <div className="section__container">
      <form className="search__form">
        <div className="search__input-box">
          <input 
            className="search__input" 
            type="text" 
            name="movie-search"
            autoComplete="off" 
            placeholder="Movie Title"
            onChange={e => handleSearchChange(e.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
}

export default Search;