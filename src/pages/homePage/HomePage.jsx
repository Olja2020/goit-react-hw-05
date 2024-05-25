// import { Link, useLocation } from 'react-router-dom';
// import MovieList from "../../components/movieList/MovieList";
// export default function HomePage() {
//   const location = useLocation();
//     return (
//       <div>
//         <h2>Trending today</h2>
//         <MovieList />
//         <Link to="/movies" state={location}>
        
//       </Link>
//       </div>
//     );
//   }
  
import {Link, useLocation} from 'react-router-dom'
import { useState, useEffect } from 'react'
import {fetchPopularMovies} from '../../Api'
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
                <ul className={css.movieList}>
                    {popularMovies.map(movie => (
                        <li key={movie.id} >
                            <Link to={`/movies/${movie.id}`} state={{ from: location }} className={css.item}>
                                {movie.title}
                            </Link>
                        </li>
                    ))}
                    {loading && <Loader />}
                </ul>
            </div>
        </main>

    )
}


