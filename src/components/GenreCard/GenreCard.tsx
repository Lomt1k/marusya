import { FC } from "react";
import MovieHelper from "../../utils/MovieHelper";
import Skeleton from "../ui/Skeleton/Skeleton";
import Image from '../ui/Image/Image';
import { Link } from "react-router";
import './GenreCard.scss';

type GenreCardProps = {
  genre: string | undefined;
}

const GenreCard: FC<GenreCardProps> = ({ genre }) => {
  if (!genre) {
    return <Skeleton className="genre-card" height={304} />
  }

  return (
    <Link className="genre-card" to={`/genres/${genre}`}>
      <Image className="genre-card__img" src={undefined} alt={genre} />
      <span className="genre-card__title">
        {MovieHelper.getLocalizedGenre(genre)}
      </span>
    </Link>
  )
}

export default GenreCard;