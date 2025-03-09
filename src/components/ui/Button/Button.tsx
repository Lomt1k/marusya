import './Button.scss';
import { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode
  secondary?: boolean
  submit?: boolean;
  disabled?: boolean;
  onClick?: Function
}

const Button: FC<ButtonProps> = ({ children, secondary, submit, disabled, onClick }) => {
  return (
    <button
      className={"button" + (secondary ? ' button--secondary' : '')}
      type={submit ? "submit" : "button"}
      disabled={disabled}
      onClick={() => { if (onClick) onClick(); }}
    >
      {children}
    </button>
  )
}

export default Button;