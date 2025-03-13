import { FC } from "react";
import { Movie } from "../../api/Movie";
import { Link } from "react-router";
import Image from '../ui/Image/Image';
import './MovieCard.scss';
import Skeleton from "../ui/Skeleton/Skeleton";
import { memo } from "react";

type MovieCardProps = {
  movie: Movie | undefined;
  topPosition?: number;
}

const MovieCard: FC<MovieCardProps> = ({ movie, topPosition }) => {
  if (!movie) {
    return <Skeleton className='movie-card__img movie-card__img--loading' />
  }

  return (
    <Link className="movie-card" to={`/movie/${movie.id}`}>
      {movie.posterUrl
        ? <Image src={movie.posterUrl} alt={movie.title} className="movie-card__img" loadingClassName="movie-card__img--loading" />
        : <span className="movie-card__img movie-card__text">{movie.title}</span>}
      {topPosition && <span className='movie-card__pos'>{topPosition}</span>}
    </Link>
  )
}

export default memo(MovieCard);