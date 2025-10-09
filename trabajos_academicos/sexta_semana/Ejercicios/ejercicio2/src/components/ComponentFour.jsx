function ComponentFour({ persona }) {
  return (
    <section className="component component-four">
      <header>Componente 4</header>
      <article className="card">
        <h2>{persona.nombre}</h2>
        <p>
          <span className="label">Direccion:</span> {persona.direccion}
        </p>
        <p>
          <span className="label">Ciudad:</span> {persona.ciudad}
        </p>
      </article>
    </section>
  );
}

export default ComponentFour;
