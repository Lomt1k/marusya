import './Input.scss';
import { FC, ReactElement, RefObject } from 'react';

type InputProps = {
  type: 'text' | 'email' | 'password';
  name: string;
  placeholder: string;
  icon: ReactElement;
  dark?: boolean;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  value?: string;
  autoFocus?: boolean;
  ref?: RefObject<HTMLInputElement | null>;
  onInput?: (value: string) => void
}

const Input: FC<InputProps> = ({ type, name, placeholder, icon, dark, required, disabled, error, value, autoFocus, ref, onInput }) => { 
  return (
    <div className={`input ${dark ? 'input--dark' : ''} ${error ? 'input--error' : ''}`}>
      <input
        className='input__field'
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        value={value}
        autoFocus={autoFocus ?? false}
        ref={ref}
        onInput={(e) => { if (onInput) onInput(e.currentTarget.value) }}
      />
      <span className='input__icon'>{icon}</span>
      {error && <span className='input__error'>{error}</span>}
    </div>
  )
}

export default Input;