import { useRandomMovie } from "../../../hooks/useRandomMovie";
import MovieSection from "./MovieSection"

const RandomMovieSection = () => {
  const movie = useRandomMovie();

  return (
    <MovieSection random movie={movie} />
  )
}

export default RandomMovieSection;