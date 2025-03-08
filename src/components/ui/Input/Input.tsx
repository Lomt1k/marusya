import './Input.scss';
import { FC, ReactElement } from "react";

type InputProps = {
  type: "text" | "email" | "password";
  name: string;
  placeholder: string;
  icon: ReactElement;
  dark?: boolean;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}

const Input: FC<InputProps> = ({ type, name, placeholder, icon, dark, required, disabled, error }) => {
  return (
    <div className={"input" + (dark ? ' input--dark' : '') + (error ? ' input--error' : '')}>
      <input
        className='input__field'
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
      <span className='input__icon'>{icon}</span>
      {error && <span className='input__error'>{error}</span>}
    </div>
  )
}

export default Input;