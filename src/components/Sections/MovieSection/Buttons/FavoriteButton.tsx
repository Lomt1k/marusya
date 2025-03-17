import IconFavorite from '/src/assets/icons/favorite.svg?react';
import IconFavoriteFilled from '/src/assets/icons/favorite-filled.svg?react';
import { FC } from "react";
import ButtonIcon from '../../../ui/ButtonIcon/ButtonIcon';

type FavoriteButtonProps = {
  movieId: number;
}

const FavoriteButton: FC<FavoriteButtonProps> = ({ movieId }) => {
  const isFavorite = movieId === 0; // TODO
  const ariaLabel = isFavorite
    ? 'Удалить из избранного'
    : 'Добавить в избранное';

  const icon = isFavorite
    ? <IconFavoriteFilled width={24} height={24} aria-hidden={true} />
    : <IconFavorite width={24} height={24} aria-hidden={true} />

  const handleClick = () => {
    // TODO
  }

  return <ButtonIcon secondary icon={icon} onClick={handleClick} ariaLabel={ariaLabel} />
}

export default FavoriteButton;