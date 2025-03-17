import './Button.scss';
import { FC, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick: Function;
  className?: string;
  secondary?: boolean;
  submit?: boolean;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, onClick, className, secondary, submit, disabled }) => {
  return (
    <button
      className={`button ${secondary ? ' button--secondary' : ''} ${className ?? ''}`}
      type={submit ? 'submit' : 'button'}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {children}
    </button>
  )
}

export default Button;