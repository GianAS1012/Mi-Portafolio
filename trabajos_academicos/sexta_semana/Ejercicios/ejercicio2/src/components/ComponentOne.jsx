import ComponentTwo from './ComponentTwo.jsx';

function ComponentOne({ persona }) {
  return (
    <section className="component component-one">
      <header>Componente 1</header>
      <ComponentTwo persona={persona} />
    </section>
  );
}

export default ComponentOne;
