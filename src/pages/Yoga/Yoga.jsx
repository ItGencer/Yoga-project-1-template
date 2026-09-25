import Button from '../../components/Button/Button';
import './Yoga.scss';

function Yoga() {
  return (
    <div className="page page--yoga">
      <div className="container">
        <header className="page__header">
          <p className="page__eyebrow">Йога</p>
          <h1 className="page__title">Плавність, сила та внутрішній баланс.</h1>
          <p className="page__description">
            Практика йоги в нашому просторі поєднує рух, дихання та усвідомленість для того, щоб ви
            відчували себе легше в тілі та спокійніше в голові.
          </p>
        </header>

        <section className="hero hero--content">
          <div className="hero__content">
            <h2 className="section__title">Для тіла, уваги та енергії</h2>
            <p className="hero__text">
              Ми працюємо з базовими асанами, дихальними техніками та м’якими розминками, які допомагають
              структурувати практику так, щоб вона була корисною навіть для початківців.
            </p>
            <div className="hero__actions">
              <Button to="/contacts" variant="primary">Записатися на заняття</Button>
              <Button to="/about" variant="ghost">Про нас</Button>
            </div>
          </div>
          <div className="hero__visual" aria-label="Зображення йоги" />
        </section>

        <section className="section">
          <div className="grid grid--three">
            <article className="info-card">
              <h3 className="info-card__title">Для початківців</h3>
              <p className="info-card__text">М’які практики, які допоможуть швидко увійти в ритм і відчути силу руху.</p>
            </article>
            <article className="info-card">
              <h3 className="info-card__title">Для активних людей</h3>
              <p className="info-card__text">Комбіновані заняття для підтримки постави, гнучкості та стабільної енергії.</p>
            </article>
            <article className="info-card">
              <h3 className="info-card__title">Для відновлення</h3>
              <p className="info-card__text">Спокійний темп, релаксуюча дихальна практика та робота з напругою в тілі.</p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Yoga;
