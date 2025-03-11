import { FC } from 'react';
import { Movie } from '../../api/Movie';

import Container from '../ui/Container/Container';
import Image from '../ui/Image/Image';
import './MovieSection.scss';
import Skeleton from '../ui/SkeletonLoader/SkeletonLoader';
import Heading from '../ui/Heading/Heading';

type MovieSectionProps = {
  movie: Movie | undefined;
  random?: boolean;
}

const MovieSection: FC<MovieSectionProps> = ({ movie, random }) => {
  return (
    <section className='movie-section'>
      <Container>
        <div className='movie-section__wrapper'>
          <div className='movie-section__content'>
            <div className="movie-section__info">
              {movie
                ? (
                  <>
                    <Heading level={random ? 2 : 1} visual={1} >{movie.title}</Heading>
                    <p className='movie-section__plot'>{movie.plot}</p>
                  </>
                )
                : (
                  <>
                    <Skeleton linesCount={2.5} />
                    <Skeleton linesCount={7} />
                  </>
                )
              }
            </div>
            <div className="movie-section__buttons">

            </div>
          </div>
          <Image className='movie-section__img' src={movie?.backdropUrl ?? movie?.posterUrl} alt={movie?.title ?? ''} />
        </div>
      </Container>
    </section>
  )
}

export default MovieSection;