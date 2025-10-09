import ComponentFour from './ComponentFour.jsx';

function ComponentThree({ persona }) {
  return (
    <section className="component component-three">
      <header>Componente 3</header>
      <ComponentFour persona={persona} />
    </section>
  );
}

export default ComponentThree;
