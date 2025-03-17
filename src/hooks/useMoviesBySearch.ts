import { useQuery } from "@tanstack/react-query";
import { Movie, fetchMoviesByTitle } from "../api/Movie";

export function useMoviesBySearch(search: string) {
  const { data, isFetching } = useQuery({
    queryKey: ['movie', 'search'],
    queryFn: () => fetchMoviesByTitle(search)
  });

  const movies: Movie[] | undefined = data;

  return { movies, isFetching };
}