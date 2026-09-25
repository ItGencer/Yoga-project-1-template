import Button from '../../components/Button/Button';
import './School.scss';

function School() {
  return (
    <div className="page page--school">
      <div className="container">
        <header className="page__header">
          <p className="page__eyebrow">Школа масажу</p>
          <h1 className="page__title">Освіта, практика та впевненість для майбутніх фахівців.</h1>
          <p className="page__description">
            Наша школа поєднує практичну роботу, базові знання анатомії, техніки масажу та сучасний підхід
            до роботи з клієнтом. Ми вчимо не просто виконувати рухи, а розуміти потреби людини.
          </p>
        </header>

        <section className="section">
          <div className="grid grid--two">
            <article className="feature-block">
              <h3 className="feature-block__title">Навчальний формат</h3>
              <p className="feature-block__text">
                Програми побудовані так, щоб навчання було доступним, структурованим і максимально практичним.
              </p>
            </article>
            <article className="feature-block">
              <h3 className="feature-block__title">Практичні заняття</h3>
              <p className="feature-block__text">
                Більшість навчання проходить у форматі роботи над техніками, постановкою рук і відчуттям тіла.
              </p>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="split">
            <div className="split__content">
              <p className="page__eyebrow">Навчальний простір</p>
              <h2 className="section__title">Зручність, підтримка та професійна атмосфера</h2>
              <p className="muted">
                У школі ми дбаємо про якісну подачу матеріалу, дружній стиль викладання та помірний ритм, який
                переноситься комфортно навіть для новачків.
              </p>
              <Button to="/contacts" variant="primary">Записатися на консультацію</Button>
            </div>
            <div className="split__media" aria-label="Плейсхолдер школи" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default School;
