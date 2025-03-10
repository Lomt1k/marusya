import './ButtonIcon.scss';
import { FC, ReactElement } from 'react';

type ButtonIconProps = {
  icon: ReactElement;
  onClick: Function;
  className?: string;
}

const ButtonIcon: FC<ButtonIconProps> = ({ icon, onClick, className }) => {
  return (
    <button
      className={'button-icon' + (className ? ` ${className}` : '')}
      type='button'
      onClick={() => onClick()}
    >
      {icon}
    </button>
  )
}

export default ButtonIcon;