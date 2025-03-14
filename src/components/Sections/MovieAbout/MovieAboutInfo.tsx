import { FC } from 'react';
import './MovieAboutInfo.scss';
import Skeleton from '../../ui/Skeleton/Skeleton';
import { MovieAboutData } from './MovieAboutData';

type MovieAboutInfoProps = {
  data: MovieAboutData
  loading: boolean;
}

const MovieAboutInfo: FC<MovieAboutInfoProps> = ({ data, loading }) => {
  if (loading) {
    return <Skeleton linesCount={1} />
  }

  return (
    <div className="movie-about-info">
      <div className="movie-about-info__param-wrapper">
        <span>{data.param}</span>
        <div className='movie-about-info__border' />
      </div>
      <span>{data.value ?? 'Неизвестно'}</span>
    </div>
  )
}

export default MovieAboutInfo;