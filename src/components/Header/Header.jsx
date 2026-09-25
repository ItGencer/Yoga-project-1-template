import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import SocialLinks from '../SocialLinks/SocialLinks';
import logo from '../../assest/logo.png';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenuOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', closeMenuOnEscape);
    return () => document.removeEventListener('keydown', closeMenuOnEscape);
  }, []);

  return (
    <header className="header">
      <div className="container header__inner">
        <NavLink to="/" className="header__brand" aria-label="Повернутися на головну">
          <img src={logo} alt="Acegrov Yoga & Fitness Club" />
        </NavLink>

        <nav
          id="main-navigation"
          className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
          aria-label="Головна навігація"
        >
          <ul className="header__list">
            {navItems.map(({ label, to }) => (
              <li key={to} className="header__item">
                <NavLink
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
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

        <button
          className={`header__toggle ${isMenuOpen ? 'header__toggle--open' : ''}`}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label={isMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

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
