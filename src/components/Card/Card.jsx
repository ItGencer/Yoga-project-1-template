import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ title, description, meta, linkText = 'Читати далі', linkTo = '#', variant = 'default' }) {
  return (
    <article className={`card card--${variant}`}>
      <div className="card__image" aria-hidden="true" />
      <div className="card__body">
        {meta ? <p className="card__meta">{meta}</p> : null}
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <Link className="card__link" to={linkTo}>
          {linkText}
        </Link>
      </div>
    </article>
  );
}

export default Card;
