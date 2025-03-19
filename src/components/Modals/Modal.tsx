import { FC, ReactNode } from "react";
import IconClose from '/src/assets/icons/close.svg?react';
import './Modal.scss';

type ModalProps = {
  onClickClose: Function;
  children?: ReactNode;
}

const Modal: FC<ModalProps> = ({ onClickClose, children }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        {children}
      </div>
      <button className="modal__close" onClick={() => onClickClose()}>
        <IconClose width={24} height={24} aria-hidden={true} />
      </button>
    </div>
  )
}

export default Modal;