import Card from '../../components/Card/Card';
import './Blog.scss';

const posts = [
  {
    slug: 'yak-pratsyuye-massazh-dlya-relaksu',
    title: 'Як працює масаж для релаксу та відновлення',
    description: 'Коротко про те, як масаж допомагає зняти напругу, збалансувати ритм і повернути легкість у повсякденні.',
    meta: 'Релакс',
  },
  {
    slug: 'praktika-yogi-dlya-posadi',
    title: 'Практика йоги для правильної постави та енергії',
    description: 'М’які вправи, що підтримують хребет, знижують втому і допомагають відчути більше впевненості в тілі.',
    meta: 'Йога',
  },
  {
    slug: 'yak-vybraty-pidkhid-do-seansu',
    title: 'Як вибрати підхід до сеансу під ваші потреби',
    description: 'Розуміння стану тіла, рівня навантаження та бажаного результату допомагає зробити сеанс максимально корисним.',
    meta: 'Рекомендації',
  },
];

function Blog() {
  return (
    <div className="page page--blog">
      <div className="container">
        <header className="page__header">
          <p className="page__eyebrow">Блог</p>
          <h1 className="page__title">Ідеї для тілесного комфорту та внутрішньої рівноваги.</h1>
          <p className="page__description">
            Консультації, поради та короткі пояснення про масаж, йогу та стиль життя, що підтримує здоров’я.
          </p>
        </header>

        <section className="section">
          <div className="grid grid--three">
            {posts.map((post) => (
              <Card
                key={post.slug}
                meta={post.meta}
                title={post.title}
                description={post.description}
                linkTo={`/blog/${post.slug}`}
                linkText="Читати далі"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Blog;
