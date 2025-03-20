import { FC } from "react";
import RootStore from "../../../store/RootStore";
import Modal from "../Modal";
import IconEmail from '/src/assets/icons/email.svg?react';
import IconPassword from '/src/assets/icons/password.svg?react';
import IconUser from '/src/assets/icons/user.svg?react';
import Button from "../../ui/Button/Button";
import ButtonText from "../../ui/ButtonText/ButtonText";
import Input from "../../ui/Input/Input";
import LogoDark from "../../ui/LogoDark/LogoDark";
import Heading from "../../ui/Heading/Heading";
import './AuthModal.scss';

type RegisterModalProps = {
  onClickLogin: () => void;
}

const RegisterModal: FC<RegisterModalProps> = ({ onClickLogin }) => {
  const iconEmail = <IconEmail aria-hidden={true} width={24} height={24} />
  const iconPassword = <IconPassword aria-hidden={true} width={24} height={24} />
  const iconUser = <IconUser aria-hidden={true} width={24} height={24} />

  return (
    <Modal className="auth-modal" onClickClose={() => RootStore.auth.setModalActive(false)}>
      <LogoDark className="auth-modal__logo" />
      <div className="auth-modal__content">
        <Heading dark level={4} className="auth-modal__heading">Регистрация</Heading>
        <div className="auth-modal__inputs">
          <Input type='email' name='email' placeholder='Электронная почта' icon={iconEmail} />
          <Input type='text' name='name' placeholder='Имя' icon={iconUser} />
          <Input type='text' name='surname' placeholder='Фамилия' icon={iconUser} />
          <Input type='password' name='password' placeholder='Пароль' icon={iconPassword} />
          <Input type='password' name='password-repeat' placeholder='Подтвердите пароль' icon={iconPassword} />
        </div>
        <Button onClick={() => {}}>Создать аккаунт</Button>
        <ButtonText dark onClick={onClickLogin} >У меня есть пароль</ButtonText>
      </div>
    </Modal>
  )
}

export default RegisterModal;