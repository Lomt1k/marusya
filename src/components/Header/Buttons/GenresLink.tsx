import './GenresLink.scss';
import { Link } from 'react-router';
import IconGenres from '/src/assets/icons/genres.svg?react';

const GenresLink = () => {
  return (
    <Link to='/genres'>
      <IconGenres width={24}/>
    </Link>
  )
}

export default GenresLink;