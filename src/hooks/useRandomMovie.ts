import { useQuery } from "@tanstack/react-query";
import { fetchRandomMovie, Movie } from "../api/Movie";

export function useRandomMovie() {
  const query = useQuery({
    queryKey: ['movie', 'random'],
    queryFn: () => fetchRandomMovie(),
  });

  const movie: Movie | undefined = query.data;
  const isLoading = query.status === 'pending';
  const error = query.error;

  return { movie, isLoading, error };
}