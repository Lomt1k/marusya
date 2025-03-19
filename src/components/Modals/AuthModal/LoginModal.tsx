import { FC, useEffect, useRef } from "react";
import RootStore from "../../../store/RootStore";
import Modal from "../Modal";
import LogoDark from "../../ui/LogoDark/LogoDark";
import Input from "../../ui/Input/Input";
import IconEmail from '/src/assets/icons/email.svg?react';
import IconPassword from '/src/assets/icons/password.svg?react';
import './LoginModal.scss';
import Button from "../../ui/Button/Button";
import ButtonText from "../../ui/ButtonText/ButtonText";

type LoginModalProps = {
  onClickRegister: Function;
}

const LoginModal: FC<LoginModalProps> = ({ onClickRegister }) => {
  const iconEmail = <IconEmail aria-hidden={true} width={24} height={24} />
  const iconPassword = <IconPassword aria-hidden={true} width={24} height={24} />
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => firstInputRef.current?.focus(), 0);
  }, []);

  return (
    <Modal className="login-modal" onClickClose={() => RootStore.auth.setModalActive(false)}>
      <LogoDark className="login-modal__logo" />
      <div className="login-modal__content">
        <div className="login-modal__inputs">
          <Input type='email' name='email' placeholder='Электронная почта' icon={iconEmail} ref={firstInputRef} />
          <Input type='password' name='password' placeholder='Пароль' icon={iconPassword} />
        </div>
        <Button onClick={() => {}}>Войти</Button>
        <ButtonText dark onClick={() => onClickRegister()} >Регистрация</ButtonText>
      </div>
    </Modal>
  )
}

export default LoginModal;