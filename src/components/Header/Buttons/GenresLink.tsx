import './GenresLink.scss';
import { Link } from 'react-router';
import IconGenres from '/src/assets/icons/genres.svg?react';

const GenresLink = () => {
  return (
    <Link className='genres-link' to='/genres'>
      <IconGenres width={32} height={32}/>
    </Link>
  )
}

export default GenresLink;