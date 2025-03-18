import { FC, memo } from "react";
import MovieHelper from "../../utils/MovieHelper";
import Skeleton from "../ui/Skeleton/Skeleton";
import Image from '../ui/Image/Image';
import { Link } from "react-router";
import './GenreCard.scss';
import { getGenreCardImage, getGenreCardImage2x } from "./GenreCardImages";

type GenreCardProps = {
  genre: string | undefined;
}

const GenreCard: FC<GenreCardProps> = ({ genre }) => {
  if (!genre) {
    return <Skeleton className="genre-card" height={304} />
  }

  const image = getGenreCardImage(genre);
  const image2x = getGenreCardImage2x(genre);

  return (
    <Link className="genre-card" to={`/genres/${genre}`}>
      <Image className="genre-card__img" src={image} srcSet={`${image2x} 2x`} alt={genre} />
      <span className="genre-card__title">
        {MovieHelper.getLocalizedGenre(genre)}
      </span>
    </Link>
  )
}

export default memo(GenreCard);