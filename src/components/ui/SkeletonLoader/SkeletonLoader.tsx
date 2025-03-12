import { FC } from 'react';
import './SkeletonLoader.scss';

type SkeletonProps = {
  className?: string;
  linesCount?: number;
  width?: number | string;
}

const Skeleton: FC<SkeletonProps> = ({ className, linesCount, width }) => {
  const style = { "--lines-count": linesCount, width: width } as React.CSSProperties;

  return (
    <div
      style={style}
      className={`skeleton-loader ${className}`}
    />
  )
}

export default Skeleton;