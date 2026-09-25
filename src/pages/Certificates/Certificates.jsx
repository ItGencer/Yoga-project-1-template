import Button from '../../components/Button/Button';
import './Certificates.scss';

function Certificates() {
  return (
    <div className="page page--certificates">
      <div className="container">
        <header className="page__header">
          <p className="page__eyebrow">Подарункові сертифікати</p>
          <h1 className="page__title">Даруйте відновлення, спокій і турботу.</h1>
          <p className="page__description">
            Сертифікат стане чудовим подарунком для близьких, які цінують здоров’я, баланс та якісний відпочинок.
          </p>
        </header>

        <section className="section">
          <div className="grid grid--three">
            <article className="certificate-card">
              <p className="certificate-card__label">Стандарт</p>
              <h3 className="certificate-card__title">1 000 грн</h3>
              <p className="certificate-card__text">Підходить для однієї сесії масажу або йоги.</p>
            </article>
            <article className="certificate-card certificate-card--featured">
              <p className="certificate-card__label">Популярний</p>
              <h3 className="certificate-card__title">2 500 грн</h3>
              <p className="certificate-card__text">Оптимальний варіант для цілого комплексу послуг.</p>
            </article>
            <article className="certificate-card">
              <p className="certificate-card__label">Преміум</p>
              <h3 className="certificate-card__title">5 000 грн</h3>
              <p className="certificate-card__text">Подвійне задоволення для особливих моментів і свят.</p>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="cta-panel">
            <div>
              <p className="page__eyebrow">Замовлення</p>
              <h2 className="section__title">З радістю допоможемо підібрати подарунок саме для вас.</h2>
            </div>
            <Button to="/contacts" variant="primary">Замовити сертифікат</Button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Certificates;
