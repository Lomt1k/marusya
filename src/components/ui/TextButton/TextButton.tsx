import { FC } from 'react';
import './TextButton.scss';

type TextButtonProps = {
  children: string;
  onClick: Function;
}

const TextButton: FC<TextButtonProps> = ({ children, onClick }) => {
  return (
    <button className='text-button' type='button' onClick={() => onClick()}>
      {children}
    </button>
  )
}

export default TextButton;