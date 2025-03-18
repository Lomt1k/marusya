import { FC } from 'react';
import './Loader.scss';

type LoaderProps = {
  small?: boolean;
}

const Loader: FC<LoaderProps> = ({ small }) => {
  return (
    <div className={`loader ${small ? 'loader--small' : ''}`} />
  )
}

export default Loader;