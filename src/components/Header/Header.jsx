import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Header.scss';

const navItems = [
  { label: 'Головна', to: '/' },
  { label: 'Йога', to: '/yoga' },
  { label: 'Школа', to: '/school' },
  { label: 'Контакти', to: '/contacts' },
  { label: 'Про нас', to: '/about' },
  { label: 'Сертифікати', to: '/certificates' },
  { label: 'Правила', to: '/rules' },
  { label: 'Блог', to: '/blog' },
];

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <NavLink to="/" className="header__brand" aria-label="Повернутися на головну">
          Ozerov
        </NavLink>

        <nav className="header__nav" aria-label="Головна навігація">
          <ul className="header__list">
            {navItems.map(({ label, to }) => (
              <li key={to} className="header__item">
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `header__link ${isActive ? 'header__link--active' : ''}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <SocialLinks theme="dark" />
          <Button to="/contacts" variant="primary">
            Записатися
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
