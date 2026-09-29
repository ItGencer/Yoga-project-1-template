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
    <>
      <section className="hero">
        <div className="hero__content">
          <p className="anchor">Масаж і йога для життя в рівновазі</p>
          <h1 className="title">Теплий простір для релаксу та відновлення.</h1>
          <p className="hero__content__text">
            Допомагаємо звільнити тіло від напруги, повернути спокій і відновити
            енергію через масаж, йогу та індивідуальний підхід до кожного
            клієнта.
          </p>
          <div className="hero__content__actions">
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
      <section className="us-service">
        <h2 className="title">Наші послуги</h2>
        <div className="us-service__three">
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
      </section>

      <section className="recommendations">
        <div className="recommendations__intro">
          <p className="anchor">Чому нас рекомендують</p>
          <h2 className="title">
            Легкість тіла, ясність думок і відчуття відновлення.
          </h2>
        </div>

        <div className="recommendations__list">
          {recommendationStats.map(({ label, value }) => (
            <div key={label} className="recommendations__list__item ">
              <div className="recommendations__list__item__meta">
                <span>{label}</span>
                <strong>{value}%</strong>
              </div>
              <div
                className="recommendations__list__item__bar"
                aria-label={`${value}%`}
              >
                <span
                  className="recommendations__list__item__bar__fill"
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="why-we">
          <div className="why-we__img-block">
            <img src={yogaClub2} alt="Yoga Studio" />
          </div>
          <div className="why-we__content">
            <p className="anchor">Чому саме ми</p>
            <h2 className="title">Зручний формат для вашого ритму</h2>
            <p className="why-we__content__muted">
              Ми створили простір, де комбінація професійного масажу,
              усвідомлених практик йоги та уваги до деталей допомагає вам
              почуватися краще з першого візиту.
            </p>
            <p className="why-we__content__muted">
              Від класичних сеансів до індивідуальних програм — кожна зустріч
              побудована так, щоб ви могли стабільно відчувати легкість,
              рівновагу та відновлення.
            </p>
          </div>
      </section>
    </>
  );
}

export default Home;
