import './Rules.scss';

const rules = [
  {
    title: 'Завчасне повідомлення',
    text: 'Будь ласка, повідомляйте про зміну часу або скасування заздалегідь, щоб ми могли організувати графік зручно для всіх.',
  },
  {
    title: 'Підготовка до прийому',
    text: 'Для комфортного сеансу рекомендується уникати надто важкої фізичної активності перед масажем та прийти в поспіші.',
  },
  {
    title: 'Комфорт і спокій',
    text: 'Ми дбаємо про атмосферу тиші й розслаблення, тому просимо не поспішати і відключати зовнішні відволікання під час практики.',
  },
];

function Rules() {
  return (
    <div className="page page--rules">
      <div className="container">
        <header className="page__header">
          <p className="page__eyebrow">Правила</p>
          <h1 className="page__title">Невеликі правила, які дозволяють насолоджуватися сеансом повністю.</h1>
          <p className="page__description">
            Наші правила прості й спрямовані на комфорт, якість сервісу та безпеку кожного відвідувача.
          </p>
        </header>

        <section className="section">
          <div className="rules-list">
            {rules.map(({ title, text }, index) => (
              <article key={title} className="rule-item">
                <span className="rule-item__number">0{index + 1}</span>
                <div className="rule-item__content">
                  <h3 className="rule-item__title">{title}</h3>
                  <p className="rule-item__text">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Rules;
