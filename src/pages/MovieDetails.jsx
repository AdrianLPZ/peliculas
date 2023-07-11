import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { useEffect, useState } from "react";
import { GetMovieImg } from "../utils/getMovieImg";
import '../styles/MovieDetails.css'

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGeneros(data.genres[0]);
    });
  }, [movieId]);

  const imageUrl = GetMovieImg(movie.poster_path, 500);
  console.log(imageUrl);

  return (
    <div className="details-container">
      <img src={imageUrl} alt={movie.title}
      className="movieImg" />
      <div className="movieDetails">
        <p className="title">
          <strong>Title: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Genre: </strong>
          {generos.name}
        </p>
        <p>
          <strong>Description: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
