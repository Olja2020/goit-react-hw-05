import  { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjFmMTdlNjI0OGZhNjNkODEzN2MxZjIzYjAwZTQ1ZSIsInN1YiI6IjY2NGUxODA3NDMxNjhhODYyOTM0YTA4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8xl0O9U7-9Eursvybh2VWOuMQ_IJiplDyDebO8HstaE";

      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=5b1f17e6248fa63d8137c1f23b00e45e&language=en-US&page=1",
        options
      );
      const data = await response.data;
      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`${movie.id}`}>{movie.title}</Link></li>
      ))}
    </ul>
  );
};

export default MovieList;