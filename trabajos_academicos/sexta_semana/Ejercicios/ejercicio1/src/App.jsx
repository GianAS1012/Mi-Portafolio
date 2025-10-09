import HeaderSection from './components/HeaderSection.jsx';
import NavigationBar from './components/NavigationBar.jsx';
import ContentSection from './components/ContentSection.jsx';
import FooterSection from './components/FooterSection.jsx';

function App() {
  return (
    <div className="app">
      <HeaderSection />
      <NavigationBar />
      <ContentSection />
      <FooterSection />
    </div>
  );
}

export default App;
