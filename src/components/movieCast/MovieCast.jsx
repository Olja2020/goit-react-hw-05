import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCast } from '../../Api';
import toast from 'react-hot-toast'
import css from './MovieCast.module.css'

const notify = () => toast.error('Please, try again!')


export default function MovieCast () {
  const [castList, setCastList] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const getMovieCast = async (movieId) => {
      try {
        const data = await fetchMovieCast(movieId);
        setCastList(data.cast);
      } catch (error) {
        notify();
        console.log(error);
      }
    }
    getMovieCast(movieId);
  }, [movieId]);

  return (
    <ul className={css.castList}>
      {castList.length > 0 
        ? castList.map(({ id, name, profile_path, character }) => (
          <li key={id} className={css.listItem}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : `http://www.suryalaya.org/images/no_image.jpg`
              }
              alt="actor"
              loading="lazy"
              width='120'
            />
            <h3 className={css.name}>{name}</h3>
            <p className={css.character}> Character: {character}</p>
          </li>
        ))
        : "No information"
      }
    </ul>
  )
}