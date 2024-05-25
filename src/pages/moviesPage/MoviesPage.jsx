import { useSearchParams, useLocation, Link} from "react-router-dom";
import { useState, useEffect } from 'react';
import {fetchMovieSearchName} from '../../Api'
import SearchBar from '../../components/searchBar/SearchBar'
import Loader from '../../components/loader/Loader'
import toast from 'react-hot-toast'
import css from './MoviesPage.module.css'

const notify = () => toast.error('Error');
export default function MoviesPage () {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [moviesList, setMoviesList] = useState([]);

    const movieName = searchParams.get('movieName') ?? '';

    useEffect(() => {
        if (movieName === '') {
            
            return;
        }
        setMoviesList([]);
        setLoading(true);
        const getMovieSearchName = async (movieName) => {
            try {
                await fetchMovieSearchName(movieName).then(data => {
                if (!data.results.length) {
                    setLoading(false);
                    setError(true);
                    return console.log(
                    'Error/'
                    );
                }
                setError(false);
                setMoviesList(data.results);
                setLoading(false);
            })
            } catch (error) {
                notify('Error');
                console.log(error);
            }
        }
        getMovieSearchName(movieName);
    }, [movieName]);

    const handleSubmit = e => {
        e.preventDefault();
        const searchForm = e.currentTarget;
        setSearchParams({ movieName: searchForm.elements.movieName.value });
        searchForm.reset();
    };


    return (
        <main className="container">
            <div className={css.moviesPage}>
                <SearchBar onSubmit={handleSubmit}/>
                {error && <p>There is no movies with this request. Please, try again</p>}
                <ul className={css.movieList}>
                    {moviesList.map(movie => {
                        return (
                            <li key={movie.id}>
                                <Link to={`/movies/${movie.id}`} state={{ from: location }} className={css.item}>
                                    {movie.original_title || movie.name}
                                </Link>
                            </li>
                        );
                    })}
                    {loading && <Loader />}
                </ul>
            </div>
        </main>
    )
}