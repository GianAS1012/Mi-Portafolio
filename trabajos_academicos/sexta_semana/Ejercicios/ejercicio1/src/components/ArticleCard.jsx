function ArticleCard({ title, description }) {
  return (
    <article className="article-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default ArticleCard;
