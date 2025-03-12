import { FC, useState } from 'react';
import './Image.scss';
import Skeleton from '../Skeleton/Skeleton';

type ImageProps = {
  src: string | null | undefined;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  draggable?: boolean;
}

const Image: FC<ImageProps> = ({ src, alt, className, width, height, draggable }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {src &&
        <img
          className={`image ${className} ${isLoaded ? '' : ' image--loading'}`}
          src={src}
          alt={alt}
          width={width}
          height={height}
          draggable={draggable ?? false}
          onLoad={() => setIsLoaded(true)}
        />
      }
      {!isLoaded && <Skeleton className={className} />}
    </>
  )
}

export default Image;