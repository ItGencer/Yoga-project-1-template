import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Footer.scss';

const footerLinks = [
  { label: 'Йога', to: '/yoga' },
  { label: 'Школа масажу', to: '/school' },
  { label: 'Подарункові сертифікати', to: '/certificates' },
  { label: 'Блог', to: '/blog' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand-block">
          <p className="footer__brand">Ozerov</p>
          <p className="footer__text">
            Теплий простір для розслаблення, відновлення і здорового ритму життя.
          </p>
          <SocialLinks theme="dark" />
        </div>

        <div className="footer__nav">
          {footerLinks.map(({ label, to }) => (
            <Link key={to} to={to} className="footer__link">
              {label}
            </Link>
          ))}
        </div>

        <div className="footer__cta">
          <p className="footer__label">Запишіться на консультацію</p>
          <Button to="/contacts" variant="dark">
            Контакти
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
