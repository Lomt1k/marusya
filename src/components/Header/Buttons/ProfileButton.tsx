import IconProfile from '/src/assets/icons/user.svg?react';
import IconProfileLogged from '/src/assets/icons/user-filled.svg?react';
import ButtonIcon from '../../ui/ButtonIcon/ButtonIcon';
import ButtonText from '../../ui/ButtonText/ButtonText';
import './ProfileButton.scss';
import { Link } from 'react-router';
import NavigationLink from '../../ui/NavigationLink/NavigationLink';

const ProfileButton = () => {
  const logged = false; // TODO

  return logged
    ? <ProfileLink />
    : <ProfileSignIn />
}

const ProfileLink = () => {
  const name = 'Константин'; // TODO

  return (
    <div className='profile-button'>
      <Link to='/account' className='profile-button__icon'>
        <IconProfileLogged width={24} height={24} />
      </Link>
      <NavigationLink to='/account' className='profile-button__nav-link'>
        {name}
      </NavigationLink>
    </div>
  )
}

const ProfileSignIn = () => {
  const handleRegisterClick = () => {
    // TODO
  }

  return (
    <div className='profile-button'>
      <ButtonIcon
        className='profile-button__icon'
        icon={<IconProfile width={24} height={24} />}
        onClick={() => handleRegisterClick()}
      />
      <ButtonText
        className='profile-button__text'
        children='Войти'
        onClick={() => handleRegisterClick()}
      />
    </div>
  )
}

export default ProfileButton;