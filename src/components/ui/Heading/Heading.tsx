import './Heading.scss';
import { FC } from 'react';

type HeadingProps = {
  level: 1 | 2;
  visual?: 1 | 2 | 'hidden'
  children?: string;
}

const Heading: FC<HeadingProps> = ({ level, visual, children }) => {
  const className = visual === 'hidden'
    ? 'visually-hidden'
    : `heading heading--${visual ?? level}`;

  switch (level) {
    case 1:
      return <h1 className={className}>{children}</h1>
    case 2:
      return <h2 className={className}>{children}</h2>
  }
}

export default Heading;