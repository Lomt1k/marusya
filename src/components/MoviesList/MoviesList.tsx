import { FC } from "react";
import { Movie } from "../../api/Movie";
import MovieCard from "../MovieCard/MovieCard";
import './MoviesList.scss';

type MoviesListProps = {
  movies: Movie[] | undefined;
  horizontal?: boolean;
  top?: boolean;
}

const MoviesList: FC<MoviesListProps> = ({ movies, horizontal, top }) => {
  const items = movies ?? new Array<undefined>(10);

  return (
    <ul className={`movies-list ${horizontal ? 'movies-list--horizontal' : ''}`}>
      {items.map((movie, index) =>
        <li key={movie?.id ?? index}>
          <MovieCard movie={movie} topPosition={top ? index + 1 : undefined} />
        </li>
      )}
    </ul>
  )
}

export default MoviesList;