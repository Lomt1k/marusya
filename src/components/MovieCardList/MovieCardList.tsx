import { FC } from "react";
import { Movie } from "../../api/Movie";
import MovieCard from "../MovieCard/MovieCard";
import './MovieCardList.scss';

type MovieCardListProps = {
  movies: Movie[] | undefined;
  horizontal?: boolean;
  top?: boolean;
}

const MovieCardList: FC<MovieCardListProps> = ({ movies, horizontal, top }) => {
  const items = movies ?? new Array<undefined>(10);

  return (
    <ul className={`movies-card-list ${horizontal ? 'movies-card-list--horizontal' : ''}`}>
      {items.map((movie, index) =>
        <li key={movie?.id ?? index}>
          <MovieCard movie={movie} topPosition={top ? index + 1 : undefined} />
        </li>
      )}
    </ul>
  )
}

export default MovieCardList;