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
    <main>
      <h1 className="page-title">The Shoppies</h1>
      <Search handleSearchChange={handleSearchChange}/>
      <div className="movie-listings">
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
    </main>
  );
}

export default Main;