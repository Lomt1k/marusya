import { useQuery } from "@tanstack/react-query";
import { fetchTopMovies, Movie } from "../api/Movie";

export function useTopMovies() {
  const query = useQuery({
    queryKey: ['movie', 'top'],
    queryFn: () => fetchTopMovies(),
  });

  const movies: Movie[] | undefined = query.data;
  return movies;
}