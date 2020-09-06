import React, { useState } from 'react';
import './Main.scss';
import Search from '../Search/Search';
import Results from '../Results/Results';
import Nominations from '../Nominations/Nominations';
import {searchMovies} from '../../data';

function Main() {
  // Declare state
  const [currNoms, setCurrNoms] = useState([]);
  const [movieLi, setMovieLi] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  // State handlers
  const addNomination = (movie) => {
    if (currNoms.length < 5)
      setCurrNoms(currNoms.concat(movie));
  }

  const removeNomination = (movie) => {
    setCurrNoms(currNoms.filter(nom => 
      (nom.Title !== movie.Title) && (nom.Year !== movie.Year)
    ));
  }

  const handleSearchChange = (input) => { 
    setSearchInput(input);

    searchMovies(input)
      .then(res => setMovieLi(res));
  }


  
  return (
    <main className="main">
      <div className="main__content">
        <h1 className="main__title">The Shoppies.</h1>
        <h3 className="main__subtitle">Watch. Nominate. Repeat.</h3>
        <div className="main__top-bar">
          <Search handleSearchChange={handleSearchChange}/>
        </div>
        <div className="main__sections">
          <Results 
            searchInput={searchInput} 
            currNoms={currNoms} 
            addNomination={addNomination}
            movieLi={movieLi}
            setMovieLi={setMovieLi}
          />
          <Nominations 
            currNoms={currNoms}
            removeNomination={removeNomination}
          />
        </div>
      </div>
    </main>
  );
}

export default Main;