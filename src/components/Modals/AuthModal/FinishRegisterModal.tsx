import { FC } from "react";
import RootStore from "../../../store/RootStore";
import Modal from "../Modal";
import Button from "../../ui/Button/Button";
import Heading from "../../ui/Heading/Heading";
import LogoDark from "../../ui/LogoDark/LogoDark";
import './AuthModal.scss';

type FinishRegisterModalProps = {
  onClickLogin: Function;
}

const FinishRegisterModal: FC<FinishRegisterModalProps> = ({ onClickLogin }) => {
  return (
    <Modal className="auth-modal" onClickClose={() => RootStore.auth.setModalActive(false)}>
      <LogoDark className="auth-modal__logo" />
      <div className="auth-modal__content">
        <Heading dark level={4} className="auth-modal__heading">Регистрация завершена</Heading>
        <p className="auth-modal__text">Используйте вашу электронную почту для входа</p>
        <Button onClick={() => onClickLogin()}>Войти</Button>\
      </div>
    </Modal>
  )
}

export default FinishRegisterModal;