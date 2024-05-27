import {Link} from 'react-router-dom'
import css from "./MovieList.module.css"
export default function MovieList ({movies, location}) {
    return (
        
        <ul className={css.MovieList}>
            {movies.map((movie) => {
                return (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} className={css.item} state={{ from: location }}>
                           {movie.title}
                        </Link>
                        
                    </li>
                )
            })}
        </ul>
        
    )
}