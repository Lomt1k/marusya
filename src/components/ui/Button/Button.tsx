import './Button.scss';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  className?: string;
  secondary?: boolean;
  submit?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, onClick, className, secondary, submit, ...rest }) => {
  return (
    <button
      className={`button ${secondary ? ' button--secondary' : ''} ${className ?? ''}`}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button;