import './LogoDark.scss';
import { FC } from 'react';
import { Link } from 'react-router';

const Logo: FC = () => {
  return (
    <Link className='logo-dark' to='/'>
      <img
        src='/src/assets/logo/logo-dark.png'
        srcSet='/src/assets/logo/logo-dark@2x.png 2x'
        alt="Логотип Маруся"
        draggable={false} />
    </Link>
  )
}

export default Logo;