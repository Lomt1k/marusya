import { FC } from "react";
import './GenreCard.scss';

type GenreCardProps = {
  genre: string | undefined;
}

const GenreCard: FC<GenreCardProps> = ({ genre }) => {
  return (
    <div className="genre-card">
      {genre}
    </div>
  )
}

export default GenreCard;