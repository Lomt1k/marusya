import { FC } from 'react';
import './Skeleton.scss';

type SkeletonProps = {
  className?: string;
  linesCount?: number;
}

const Skeleton: FC<SkeletonProps> = ({ className, linesCount }) => {
  const style = { "--lines-count": linesCount } as React.CSSProperties;

  return (
    <rect
      style={style}
      className={`skeleton ${className}`}
    />
  )
}

export default Skeleton;