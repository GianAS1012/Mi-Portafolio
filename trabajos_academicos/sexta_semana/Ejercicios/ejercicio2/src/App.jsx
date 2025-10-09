import ComponentOne from './components/ComponentOne.jsx';

const persona = {
  nombre: 'Jaime',
  direccion: 'Jr. Junin 450',
  ciudad: 'Huancayo'
};

function App() {
  return (
    <div className="app-shell">
      <h1>Componentes anidados</h1>
      <ComponentOne persona={persona} />
    </div>
  );
}

export default App;
