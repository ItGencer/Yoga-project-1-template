import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import SocialLinks from "../SocialLinks/SocialLinks";
import logo from "../../assest/logo.png";
import Navigation from "../Navigation/Navigation";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <NavLink
          to="/"
          className="header__inner__brand"
          aria-label="Повернутися на головну"
        >
          <img src={logo} alt="Acegrov Yoga & Fitness Club" />
        </NavLink>

        <div className="header__inner__actions">
          <SocialLinks theme="dark" />
          <Button to="/contacts" variant="gold" theme="dark">
            Записатися
          </Button>
        </div>

        <Navigation />
      </div>
    </header>
  );
}

export default Header;
