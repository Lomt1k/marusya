import IconFavorite from '/src/assets/icons/favorite.svg?react';
import IconFavoriteFilled from '/src/assets/icons/favorite-filled.svg?react';
import { FC } from "react";
import ButtonIcon from '../../../ui/ButtonIcon/ButtonIcon';

type FavoriteButtonProps = {
  movieId: number;
}

const FavoriteButton: FC<FavoriteButtonProps> = ({ movieId }) => {
  const isFavorite = movieId === 0; // TODO
  
  const icon = isFavorite
    ? <IconFavoriteFilled width={24} height={24} />
    : <IconFavorite width={24} height={24} />

  const handleClick = () => {
    // TODO
  }

  return <ButtonIcon secondary icon={icon} onClick={handleClick} />
}

export default FavoriteButton;