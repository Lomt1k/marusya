import './LogoDark.scss';
import IconLogo from '/src/assets/logo/logo-dark.png';
import IconLogo2x from '/src/assets/logo/logo-dark@2x.png';
import { FC } from 'react';
import { Link } from 'react-router';

const LogoDark: FC = () => {
  return (
    <Link className='logo-dark' to='/'>
      <img
        src={IconLogo}
        srcSet={IconLogo2x + ' 2x'}
        alt="Логотип Маруся"
        draggable={false} />
    </Link>
  )
}

export default LogoDark;