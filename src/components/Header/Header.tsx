import MainNav from './MainNav';
import Search from './Search';
import Container from '../ui/Container/Container';
import Logo from '../ui/Logo/Logo';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <div className="header__wrapper">
          <Logo />
          <div className="header__content">
            <MainNav />
            <Search />
          </div>
          <div className='header__buttons'>

          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header;