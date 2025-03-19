import { FC } from "react";
import RootStore from "../../../store/RootStore";
import Modal from "../Modal";
import './FinishRegisterModal.scss';

type FinishRegisterModalProps = {
  onClickLogin: Function;
}

const FinishRegisterModal: FC<FinishRegisterModalProps> = ({ onClickLogin }) => {
  return (
    <Modal onClickClose={() => RootStore.auth.setModalActive(false)}>
      FINISH
    </Modal>
  )
}

export default FinishRegisterModal;