import Container from '../../ui/Container/Container';
import Heading from '../../ui/Heading/Heading';
import IconMovie from '/src/assets/icons/movie.svg?react';
import './NotFound.scss';
import { FC } from 'react';
import ButtonLink from '../../ui/Button/ButtonLink';

type NotFoundProps = {
  title: string;
}

const NotFound: FC<NotFoundProps> = ({ title }) => {
  return (
    <section className='not-found'>
      <Container>
        <div className="not-found__wrapper">
          <IconMovie width='10%' />
          <Heading level={1} visual={2}>{title}</Heading>
          <ButtonLink to={'/'}>На главную</ButtonLink>
        </div>
      </Container>
    </section>
  )
}

export default NotFound;