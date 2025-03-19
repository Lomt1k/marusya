import { FC } from "react";
import RootStore from "../../../store/RootStore";
import Modal from "../Modal";
import './RegisterModal.scss';

type RegisterModalProps = {
  onClickLogin: Function;
}

const RegisterModal: FC<RegisterModalProps> = ({ onClickLogin }) => {
  return (
    <Modal onClickClose={() => RootStore.auth.setModalActive(false)}>
      REGISTER
    </Modal>
  )
}

export default RegisterModal;