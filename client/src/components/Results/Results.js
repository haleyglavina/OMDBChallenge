import React from 'react';
import './Results.scss';
import Movie from '../Movie/Movie';
import {v4 as uuid} from 'uuid';

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

function Results({searchInput, currNoms}) {
  return (
    <div className="section__container">
      <h2 className="section__title">{`Results for "${searchInput}"`}</h2>
      <ul className="results__ul">
        {movieLi.map(movie => 
          <li key={uuid()}><Movie movie={movie} currNoms={currNoms}/></li>
        )}
      </ul>
    </div>
  );
}

export default Results;