import axios from "axios";
const KEY = '5b1f17e6248fa63d8137c1f23b00e45e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjFmMTdlNjI0OGZhNjNkODEzN2MxZjIzYjAwZTQ1ZSIsInN1YiI6IjY2NGUxODA3NDMxNjhhODYyOTM0YTA4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8xl0O9U7-9Eursvybh2VWOuMQ_IJiplDyDebO8HstaE";
  
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
export const fetchPopularMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${KEY}`, options);
  return response.data;
}

export const fetchMovieSearchName = async (query) => {
  const response = await axios.get(
  `search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`, options);
  return response.data;
}

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`movie/${movieId}?api_key=${KEY}&language=en-US`, options);
  
  return response.data;
}

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`, options);

  return response.data;
}

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/credits?api_key=${KEY}&language=en-US`, options);

  return response.data;
}