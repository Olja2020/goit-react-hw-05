
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieReviews } from '../../Api';
import toast from 'react-hot-toast'
import { FaUserCircle } from "react-icons/fa";
import css from './MovieReviews.module.css'

const notify = () => toast.error('Error');

export default function MovieReviews () {
    const [reviewsList, setReviewsList] = useState([]);
    const { movieId } = useParams();
    useEffect(() => {
        const getMovieReviews = async (movieId) => {
            try {
                const data = await fetchMovieReviews(movieId);
                setReviewsList(data.results);
            } catch (error) {
                notify();
                console.log(error);
            }
        }
        getMovieReviews(movieId);
    }, [movieId]);

    return (
        <main className='container'>
            <ul>
                { reviewsList.length > 0 
                    ? reviewsList.map(({author, content, id}) => (
                            <li key={id} className={css.item}>
                                <p className={css.name}><FaUserCircle className={css.icon}/>{author}</p>
                                <p className={css.content}>{content}</p>
                            </li>
                        )):"No reviews"
                    
                }
                
            </ul>
        </main>
    );
}
