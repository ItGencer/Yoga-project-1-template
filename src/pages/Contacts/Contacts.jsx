import Button from '../../components/Button/Button';
import './Contacts.scss';

function Contacts() {
  return (
    <div className="page page--contacts">
      <div className="container">
        <header className="page__header">
          <p className="page__eyebrow">Контакти</p>
          <h1 className="page__title">Запишіться на комфортну сесію або консультацію.</h1>
          <p className="page__description">
            Ми завжди раді відповісти на ваші запитання та підібрати зручний час для масажу, йоги або навчання.
          </p>
        </header>

        <section className="section">
          <div className="grid grid--three">
            <article className="contact-card">
              <h3 className="contact-card__title">Телефон</h3>
              <p className="contact-card__text">+38 (067) 123 45 67</p>
            </article>
            <article className="contact-card">
              <h3 className="contact-card__title">Місцезнаходження</h3>
              <p className="contact-card__text">м. Київ, вул. Лазурна, 18</p>
            </article>
            <article className="contact-card">
              <h3 className="contact-card__title">Email</h3>
              <p className="contact-card__text">hello@ozerov.in.ua</p>
            </article>
          </div>
        </section>

        <section className="section contact-map-section">
          <div className="contact-map">
            <iframe
              title="Карта місцезнаходження"
              src="https://www.google.com/maps?q=Kyiv&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className="section">
          <div className="cta-panel">
            <div>
              <p className="page__eyebrow">Почати зараз</p>
              <h2 className="section__title">Пишіть або телефонуйте — ми відповімо у робочі години.</h2>
            </div>
            <Button to="/" variant="primary">Повернутися на головну</Button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contacts;
