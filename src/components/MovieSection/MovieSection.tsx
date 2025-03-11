import { FC } from 'react';
import { Movie } from '../../api/Movie';
import './MovieSection.scss';
import Container from '../ui/Container/Container';

type MovieSectionProps = {
  movie: Movie | undefined;
  loading?: boolean;
  random?: boolean;
}

const MovieSection: FC<MovieSectionProps> = ({ movie, loading, random }) => {
  return (
    <section className='movie-section'>
      <Container>
        <div className='movie-section__wrapper'>
          {movie && movie.title}
        </div>
      </Container>
    </section>
  )
}

export default MovieSection;