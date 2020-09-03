import React from 'react';
import './Main.scss';
import Search from '../Search/Search';
import Results from '../Results/Results';
import Nominations from '../Nominations/Nominations';

function Main() {
  const searchChanged = (input) => {
    console.log("Search changed: ", input)
  }

  let currNoms = [
    {
        "Title": "Hey Ram",
        "Year": "2000",
        "imdbID": "tt0222012",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BY2U3ZWVmODEtZDRiNy00YmFiLTg5ZjEtNzU2ZmJhYzQzZGQ0XkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_SX300.jpg"
    },
    {
        "Title": "Ram Jaane",
        "Year": "1995",
        "imdbID": "tt0114231",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTc1MDkzODk2Nl5BMl5BanBnXkFtZTcwNjA2ODgzMQ@@._V1_SX300.jpg"
    }
  ];
  
  return (
    <main>
      <h1 className="page-title">The Shoppies</h1>
      <Search searchChanged={searchChanged}/>
      <div className="movie-listings">
        <Results searchInput="ram" currNoms={currNoms} />
        <Nominations currNoms={currNoms}/>
      </div>
    </main>
  );
}

export default Main;