import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import "./Home.scss";
import yogaClub from "../../assest/yoga-club.jpg";
import yogaClub2 from "../../assest/yoga-club2.jpg";
import massageClasic from "../../assest/massage.jpg";
import yogaRetring from "../../assest/yoga-retring.jpg";
import massageIndividual from "../../assest/massage individual.jpg";

const services = [
  {
    img: massageClasic,
    title: "Массаж для тіла",
    description:
      "Релаксуючі та відновлювальні процедури для зняття напруги, покращення кровообігу та загального самопочуття.",
    meta: "Класичний масаж",
    linkTo: "/school",
  },
  {
    img: yogaRetring,
    title: "Йога-ретрит",
    description:
      "Плавні практики для гнучкості, правильної постави та внутрішнього балансу в повсякденному ритмі.",
    meta: "Станова практика",
    linkTo: "/yoga",
  },
  {
    img: massageIndividual,
    title: "Індивідуальний підхід",
    description:
      "Програма під кожну людину, враховуючи потреби, рівень активності та цілі відновлення.",
    meta: "Персональна програма",
    linkTo: "/about",
  },
];

const recommendationStats = [
  { label: "Рекомендують після сеансу", value: 92 },
  { label: "Клієнтів повертаються повторно", value: 88 },
  { label: "Точковий результат за 1–2 візити", value: 76 },
];

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero__content">
          <p className="hero__content__anchor">Масаж і йога для життя в рівновазі</p>
          <h1 className="hero__title">
            Теплий простір для релаксу та відновлення.
          </h1>
          <p className="hero__text">
            Допомагаємо звільнити тіло від напруги, повернути спокій і відновити
            енергію через масаж, йогу та індивідуальний підхід до кожного
            клієнта.
          </p>
          <div className="hero__actions">
            <Button to="/contacts" variant="primary">
              Записатися
            </Button>
            <Button to="/school" variant="gold">
              Дізнатися більше
            </Button>
          </div>
        </div>

        <div className="img-block">
          <img src={yogaClub} alt="yoga" />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section__title">Наші послуги</h2>
          <div className="grid grid--three">
            {services.map((service) => (
              <Card
                img={service.img}
                key={service.title}
                meta={service.meta}
                title={service.title}
                description={service.description}
                linkTo={service.linkTo}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="recommendations__intro">
          <p className="page__eyebrow">Чому нас рекомендують</p>
          <h2 className="section__title">
            Легкість тіла, ясність думок і відчуття відновлення.
          </h2>
        </div>

        <div className="recommendations__list">
          {recommendationStats.map(({ label, value }) => (
            <div key={label} className="recommendation-item">
              <div className="recommendation-item__meta">
                <span>{label}</span>
                <strong>{value}%</strong>
              </div>
              <div className="progress-bar" aria-label={`${value}%`}>
                <span
                  className="progress-bar__fill"
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="split split--reverse">
            <div className="img-block">
              <img src={yogaClub2} alt="Yoga Studio" />
            </div>
            <div className="split__content">
              <p className="page__eyebrow">Чому саме ми</p>
              <h2 className="section__title">
                Зручний формат для вашого ритму
              </h2>
              <p className="muted">
                Ми створили простір, де комбінація професійного масажу,
                усвідомлених практик йоги та уваги до деталей допомагає вам
                почуватися краще з першого візиту.
              </p>
              <p className="muted">
                Від класичних сеансів до індивідуальних програм — кожна зустріч
                побудована так, щоб ви могли стабільно відчувати легкість,
                рівновагу та відновлення.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
