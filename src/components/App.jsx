//import { useEffect, useState } from "react";
//import React from "react";



//import MovieDetailPage from "../pages/movieDetailPage/MovieDetailPage";
import MoviesPage from "../pages/moviesPage/MoviesPage";
//import { BiMoviePlay } from "react-icons/bi";
import { Route, Routes } from 'react-router-dom';
//import Navigation from '../Navigation/Navigation';
import HomePage from '../pages/homePage/HomePage';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
//import MovieCast from '../components/movieCast/MovieCast';
//import MovieReviews  from '../components/movieReviews/MovieReviews';
//import css from './App.module.css';
export default function App ()  {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={< MoviesPage/>} />
        {/* <Route path="/movies/:movieId" element={<MovieDetailPage />} />
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>  */}
        <Route path="*" element={< NotFoundPage/>} />
      </Routes>
    </div>
  );
}
