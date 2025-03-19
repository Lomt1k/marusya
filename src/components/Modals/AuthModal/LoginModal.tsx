import { FC } from "react";
import RootStore from "../../../store/RootStore";
import Modal from "../Modal";
import './LoginModal.scss';

type LoginModalProps = {
  onClickRegister: Function;
}

const LoginModal: FC<LoginModalProps> = ({ onClickRegister }) => {
  return (
    <Modal onClickClose={() => RootStore.auth.setModalActive(false)}>
      LOGIN
    </Modal>
  )
}

export default LoginModal;