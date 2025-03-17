import { FC } from "react";
import './MoviesByGenre.scss';
import Container from "../../ui/Container/Container";
import Heading from "../../ui/Heading/Heading";
import MovieCardList from "../../MovieCardList/MovieCardList";
import Button from "../../ui/Button/Button";
import { useMoviesByGenre } from "../../../hooks/useMoviesByGenre";
import MovieHelper from "../../../utils/MovieHelper";

type MoviesByGenreProps = {
  genre: string;
}

const MoviesByGenre: FC<MoviesByGenreProps> = ({ genre }) => {
  const { movies, loadNextPage } = useMoviesByGenre(genre);

  return (
    <section className="movies-by-genre">
      <Container>
        <div className="movies-by-genre__wrapper">
          <Heading level={1}>{MovieHelper.getLocalizedGenre(genre)}</Heading>
          <MovieCardList movies={movies} />
          <Button onClick={() => loadNextPage()}>Показать ещё</Button>
        </div>
      </Container>
    </section>
  )
}

export default MoviesByGenre;