import { FC, useState, useEffect } from 'react';
import Skeleton from '../Skeleton/Skeleton';
import IconLoadingError from '/src/assets/icons/loading-error.svg?react';
import './Image.scss';

type ImageProps = {
  src: string | undefined;
  alt: string;
  className?: string;
  draggable?: boolean;
}

/// Ототбражает картинку с индикатором загрузки (в том числе при пустом src)
const Image: FC<ImageProps> = ({ src, alt, className, draggable }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsLoaded(false);
  }, [src]);

  const handleImageLoad = () => {
    setIsLoading(false);
    setIsLoaded(true);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setIsLoaded(false);
  };

  if (!isLoading && !isLoaded) {
    return (
      <div className={`image ${className}`}>
        <div className='image__error-wrapper'>
          <IconLoadingError />
          <span>{alt}</span>
        </div>
      </div>
    )
  }

  return (
    <>
      {isLoading && <Skeleton className={className} />}
      {src &&
        <img
          className={`image ${className}`}
          src={src}
          alt={alt}
          draggable={draggable ?? false}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ display: isLoaded ? 'block' : 'none' }}
        />
      }
    </>
  );
}

export default Image;