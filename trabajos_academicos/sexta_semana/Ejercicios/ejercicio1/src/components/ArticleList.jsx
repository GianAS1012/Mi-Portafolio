import ArticleCard from './ArticleCard.jsx';

const articles = [
  {
    title: 'Artículo Destacado',
    description:
      'Un resumen concreto de la información principal que quieres comunicar en esta sección.'
  },
  {
    title: 'Artículo Secundario',
    description:
      'Contenido adicional que complementa al artículo destacado y refuerza el mensaje principal.'
  }
];

function ArticleList() {
  return (
    <section className="content-section" aria-label="Artículos destacados">
      {articles.map((article) => (
        <ArticleCard key={article.title} {...article} />
      ))}
    </section>
  );
}

export default ArticleList;
