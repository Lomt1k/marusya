import './ButtonIcon.scss';
import { FC, ReactElement } from 'react';

type ButtonIconProps = {
  icon: ReactElement;
  onClick: Function;
  secondary?: boolean;
  className?: string;
}

const ButtonIcon: FC<ButtonIconProps> = ({ icon, onClick, secondary, className }) => {
  return (
    <button
      className={`button-icon ${secondary ? 'button-icon--secondary' : ''} ${className ?? ''}`}
      type='button'
      onClick={() => onClick()}
    >
      {icon}
    </button>
  )
}

export default ButtonIcon;