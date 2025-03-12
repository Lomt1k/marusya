import { FC } from 'react';
import { Movie } from '../../api/Movie';
import Container from '../ui/Container/Container';
import Image from '../ui/Image/Image';
import Skeleton from '../ui/SkeletonLoader/SkeletonLoader';
import Heading from '../ui/Heading/Heading';
import Rating from '../ui/Rating/Rating';
import Button from '../ui/Button/Button';
import ButtonLink from '../ui/Button/ButtonLink';
import { getLocalizedGenres, getRuntimeString } from '../../utils/MovieHelper';
import EmptyBackdropImage from '/src/assets/images/emptyBackdrop.webp';
import './MovieSection.scss';
import FavoriteButton from './Buttons/FavoriteButton';
import RefreshMovieButton from './Buttons/RefreshMovieButton';

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
                    <div className="movie-section__info-top">
                      <Rating rating={movie.tmdbRating} />
                      <span>{movie.releaseYear}</span>
                      <span>{getLocalizedGenres(movie.genres)}</span>
                      <span>{getRuntimeString(movie.runtime)}</span>
                    </div>
                    <Heading level={random ? 2 : 1} visual={1} >{movie.title}</Heading>
                    <p className='movie-section__plot'>{movie.plot}</p>
                  </>
                )
                : (
                  <>
                    <Skeleton linesCount={1.3} width='50%' />
                    <Skeleton linesCount={2.5} />
                    <Skeleton linesCount={7} />
                  </>
                )
              }
            </div>
            <div className="movie-section__buttons">
              {movie &&
                <>
                  <Button onClick={() => { }} >Трейлер</Button>
                  {random && <ButtonLink secondary to={`/movie/${movie.id}`}>О фильме</ButtonLink>}
                  <FavoriteButton movieId={movie.id} />
                  {random && <RefreshMovieButton />}
                </>
              }
            </div>
          </div>
          <Image
            className='movie-section__img'
            src={movie ? (movie.backdropUrl ?? movie.posterUrl ?? EmptyBackdropImage) : ''}
            alt={movie?.title ?? ''}
          />
        </div>
      </Container>
    </section>
  )
}

export default MovieSection;