import { useRandomMovie } from "../../hooks/useRandomMovie";
import MovieSection from "./MovieSection"

const RandomMovieSection = () => {
  const { movie, isLoading, error } = useRandomMovie();

  return (
    <MovieSection random movie={movie} loading={isLoading} />
  )
}

export default RandomMovieSection;