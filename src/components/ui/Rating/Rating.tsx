import './Rating.scss';
import StarIcon from '/src/assets/icons/star.svg?react';
import { FC } from 'react';

type RatingProps = {
  rating: number;
  small?: boolean;
}

const getRatingModifier = (rating: number) => {
  if (rating >= 8.5) return '';
  if (rating >= 7) return ' rating--good';
  if (rating >= 5) return ' rating--normal';
  return ' rating--bad';
}

const Rating: FC<RatingProps> = ({ rating, small }) => {
  return (
    <div className={ `rating ${small ? 'rating--s' : ''} ${getRatingModifier(rating)}` }>
      <StarIcon />
      <span>{rating.toLocaleString()}</span>
    </div>
  )
}

export default Rating;