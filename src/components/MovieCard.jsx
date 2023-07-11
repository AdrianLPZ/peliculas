import '../styles/MovieCard.css'
import { Link } from 'react-router-dom';

export function MovieCard({movie}){
  const imgUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <li className='movieCard'>
      <Link to={"movies/" + movie.id}>
      <img 
      className='movieImg'
      src={imgUrl}
      alt={movie.title} />
      <div className='movieTitle'>{movie.title}</div>
      </Link>
    </li>
  );
}