import React from 'react';
import './Main.scss';
import Search from '../Search/Search';
import Results from '../Results/Results';
import Nominations from '../Nominations/Nominations';

function Main() {
  const searchChanged = (input) => {
    console.log("Search changed: ", input)
  }
  
  return (
    <main>
      <h1 className="page-title">The Shoppies</h1>
      <Search searchChanged={searchChanged}/>
      <div className="movie-listings">
        <Results searchInput="ram" />
        <Nominations />
      </div>
    </main>
  );
}

export default Main;