import { FC, useEffect, useRef } from "react";
import RootStore from "../../../store/RootStore";
import Modal from "../Modal";
import IconEmail from '/src/assets/icons/email.svg?react';
import IconPassword from '/src/assets/icons/password.svg?react';
import IconUser from '/src/assets/icons/user.svg?react';
import './RegisterModal.scss';
import Button from "../../ui/Button/Button";
import ButtonText from "../../ui/ButtonText/ButtonText";
import Input from "../../ui/Input/Input";
import LogoDark from "../../ui/LogoDark/LogoDark";
import Heading from "../../ui/Heading/Heading";

type RegisterModalProps = {
  onClickLogin: Function;
}

const RegisterModal: FC<RegisterModalProps> = ({ onClickLogin }) => {
  const iconEmail = <IconEmail aria-hidden={true} width={24} height={24} />
  const iconPassword = <IconPassword aria-hidden={true} width={24} height={24} />
  const iconUser = <IconUser aria-hidden={true} width={24} height={24} />
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => firstInputRef.current?.focus(), 0);
  }, []);

  return (
    <Modal className="register-modal" onClickClose={() => RootStore.auth.setModalActive(false)}>
      <LogoDark className="register-modal__logo" />
      <div className="register-modal__content">
        <Heading dark level={4} className="register-modal__heading">Регистрация</Heading>
        <div className="register-modal__inputs">
          <Input type='email' name='email' placeholder='Электронная почта' icon={iconEmail} ref={firstInputRef} />
          <Input type='text' name='name' placeholder='Имя' icon={iconUser} />
          <Input type='text' name='surname' placeholder='Фамилия' icon={iconUser} />
          <Input type='password' name='password' placeholder='Пароль' icon={iconPassword} />
          <Input type='password' name='password-repeat' placeholder='Подтвердите пароль' icon={iconPassword} />
        </div>
        <Button onClick={() => {}}>Создать аккаунт</Button>
        <ButtonText dark onClick={() => onClickLogin()} >У меня есть пароль</ButtonText>
      </div>
    </Modal>
  )
}

export default RegisterModal;