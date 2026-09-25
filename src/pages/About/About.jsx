import './About.scss';

function About() {
  return (
    <div className="page page--about">
      <div className="container">
        <header className="page__header">
          <p className="page__eyebrow">Про нас</p>
          <h1 className="page__title">Ми створюємо простір для живого, вільного самопочуття.</h1>
          <p className="page__description">
            Наша команда об’єднана бажанням створити атмосферу, де зручно дихати, відновлювати сили і ставити
            здоров’я на перше місце без зайвого стресу та хаосу.
          </p>
        </header>

        <section className="section">
          <div className="split">
            <div className="split__content">
              <h2 className="section__title">Підхід, який дійсно працює</h2>
              <p className="muted">
                Ми працюємо з людиною не як з набором симптомів, а як з цілісною особистістю. Тому кожен сеанс
                або практика адаптовані під температуру вашого життя, стан тіла та потрібну мету.
              </p>
              <p className="muted">
                Усе, що ми робимо, спрямоване на зняття напруги, відновлення ритму та посилення відчуття себе в
                гармонії з тілом.
              </p>
            </div>
            <div className="split__media" aria-label="Плейсхолдер про нас" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
