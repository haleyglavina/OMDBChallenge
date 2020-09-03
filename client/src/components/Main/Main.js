import React, { useState } from 'react';
import './Main.scss';
import Search from '../Search/Search';
import Results from '../Results/Results';
import Nominations from '../Nominations/Nominations';

function Main() {
  // Declare state
  let movieLi = [
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
    },
    {
        "Title": "Ram Lakhan",
        "Year": "1989",
        "imdbID": "tt0098168",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjI1MjQ4MzIxNl5BMl5BanBnXkFtZTgwMTEzNzg3NjE@._V1_SX300.jpg"
    },
    {
        "Title": "Ram Teri Ganga Maili",
        "Year": "1985",
        "imdbID": "tt0152139",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjAwNDE4Nzk4NF5BMl5BanBnXkFtZTYwMTUzMjQ5._V1_SX300.jpg"
    },
    {
        "Title": "Ram Aur Shyam",
        "Year": "1967",
        "imdbID": "tt0062177",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjE0OTY1MjI5NV5BMl5BanBnXkFtZTcwMjAyOTQyMQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Ram Dass, Going Home",
        "Year": "2017",
        "imdbID": "tt6089564",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjZiNGIzMTMtNTRkMS00YzQxLWJiMjYtNjhhMmFiYmEwYTdkXkEyXkFqcGdeQXVyNjg4MzQ2OTg@._V1_SX300.jpg"
    },
    {
        "Title": "Ram Singh Charlie",
        "Year": "2020",
        "imdbID": "tt12642180",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNmU2ZTBlYmYtMTI3ZS00M2EyLWJjOTItZDU2MjA3ODk3ZTkyXkEyXkFqcGdeQXVyMTIzNTE5MDkz._V1_SX300.jpg"
    },
    {
        "Title": "Siya Ke Ram",
        "Year": "2015–2016",
        "imdbID": "tt5700398",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNWNmNTg2ZTktYjJlOS00Zjc4LTlmODAtZTY1OWM0ZmUzNjUxXkEyXkFqcGdeQXVyNjgxNTM2NTU@._V1_SX300.jpg"
    },
    {
        "Title": "Ram Balram",
        "Year": "1980",
        "imdbID": "tt0081401",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY0MTk0MTM3MV5BMl5BanBnXkFtZTcwOTIyNDE0MQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Dying to Know: Ram Dass & Timothy Leary",
        "Year": "2014",
        "imdbID": "tt2516424",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTVlMDZiZTItMDRjZC00MGViLTljNWYtODg2YTNkYjUyMTcxXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg"
    }
  ];

  const [currNoms, setCurrNoms] = useState([]);
  //const [movieLi, setMovieLi] = useState([]);
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
  
  return (
    <main>
      <h1 className="page-title">The Shoppies</h1>
      <Search setSearchInput={setSearchInput}/>
      <div className="movie-listings">
        <Results 
          searchInput={searchInput} 
          currNoms={currNoms} 
          addNomination={addNomination}
          movieLi={movieLi}
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