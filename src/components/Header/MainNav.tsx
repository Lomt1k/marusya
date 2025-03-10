import { NavLink } from 'react-router';
import './MainNav.scss';

interface NavLinkData {
  text: string;
  path: string;
}

const datas: NavLinkData[] = [
  {
    text: 'Главная',
    path: '/'
  },
  {
    text: 'Жанры',
    path: '/genres'
  },
];

const MainNav = () => {
  return (
    <nav className='main-nav'>
      <ul className="main-nav__list">
        {datas.map(data =>
          <li key={data.path}>
            <NavLink
              to={data.path}
              className={({ isActive }) => ('main-nav__link' + (isActive ? ' main-nav__link--active' : ''))}
            >
              {data.text}
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default MainNav;