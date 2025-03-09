import './Button.scss';
import { FC, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode
  onClick: Function;
  secondary?: boolean
  submit?: boolean;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, onClick, secondary, submit, disabled }) => {
  return (
    <button
      className={'button' + (secondary ? ' button--secondary' : '')}
      type={submit ? 'submit' : 'button'}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {children}
    </button>
  )
}

export default Button;