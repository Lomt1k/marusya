import './Logo.scss';
import { FC } from 'react';
import { Link } from 'react-router';

const Logo: FC = () => {
  return (
    <Link className='logo' to='/'>
      <img
        src='/src/assets/logo/logo.png'
        srcSet='/src/assets/logo/logo@2x.png 2x'
        alt="Логотип Маруся"
        draggable={false} />
    </Link>
  )
}

export default Logo;