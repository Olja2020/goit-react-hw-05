import {fetchPopularMovies} from "../../Api"
import { useLocation} from 'react-router-dom'
import { useState, useEffect } from 'react'
//import {fetchPopularMovies} from '../../Api'
import MovieList from '../../components/movieList/MovieList'
import Loader from '../../components/loader/Loader'
import toast from 'react-hot-toast'
import css from './HomePage.module.css'

const notify = () => toast.error('Error');

export default function HomePage() {
    const [popularMovies, setPopularMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        async function getPopularMovies() {
            setLoading(true);
            try {
              const data = await fetchPopularMovies();
              setPopularMovies(data.results);
              setLoading(false);
            } catch (error) {
                notify();
                console.log(error);
            }
        }
      
        getPopularMovies();
    }, [])

    return (
        <main className='container'>
            <div className={css.homePage}>
                <h1>Trending today</h1>
                <MovieList movies={popularMovies} location={location}/>
                    {loading && <Loader />}
               
            </div>
        </main>

    )
}

