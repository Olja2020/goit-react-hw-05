import {lazy, Suspense} from 'react'
import { Route, Routes } from 'react-router-dom';
import Loader from './components/loader/Loader.jsx';
const MovieDetailPage = lazy(() => import('../pages/movieDetailPage/MovieDetailPage.jsx'));
const MoviesPage = lazy(() => import('../pages/moviesPage/MoviesPage.jsx'));
import Navigation from '../components/navigation/Navigation.jsx'
const HomePage = lazy(() => import('../pages/homePage/HomePage.jsx'));
import NotFoundPage from '../pages/notFoundPage/NotFoundPage.jsx'
const MovieCast = lazy(() => import('../components/movieCast/MovieCast.jsx'));
const MovieReviews = lazy(() => import('../components/movieReviews/MovieReviews.jsx'));

import css from './App.module.css';

export default function App ()  {
  return (
    <div className={css.container}>
      
      <Navigation /> 
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={< MoviesPage/>} />
        <Route path="/movies/:movieId" element={<MovieDetailPage />} >
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route> 
        <Route path="*" element={< NotFoundPage/>} />
      </Routes> 
       </Suspense>
    </div>
  );
}









