import axios from 'axios';

const BASIC_URL = 'http://www.omdbapi.com/';
const API_KEY = 'apikey=1d5f927d';

// Get movies using search input
export const searchMovies = (searchInput) => {
    return axios.get(`${BASIC_URL}?s=${searchInput}&${API_KEY}`)
        .then(res => {
            console.log("res", res)
            return res.data.Response
                ? res.data.Search.filter(film => film.Type.toLowerCase() === 'movie')
                : false
        })
        .catch(err => console.log("Search for movies error:", err));
}