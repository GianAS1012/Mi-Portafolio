import ComponentThree from './ComponentThree.jsx';

function ComponentTwo({ persona }) {
  return (
    <section className="component component-two">
      <header>Componente 2</header>
      <ComponentThree persona={persona} />
    </section>
  );
}

export default ComponentTwo;
