import logo from '../assets/the-witcher-jdr.jpg';
import '../styles/App.css';
import Card from './Card.js';
import Header from './Header.js';

function App() {
  return (
    <div>
      <Header>
        <img src={logo} alt='The witcher jdr' className='logo' />
        <h1 className='title'>Aide pour le jdr the witcher</h1>
      </Header>
      <div className="App">
        <Card title="Composant alchimique" Description="Ensemble des composant nécessaire pour la création de potion, decoction, d'huile ou d'article alchimique"></Card>
        <Card title="Composant d'artisanat" Description="Composant utilisable pour la création d'arme et d'armure"></Card>
      </div>
    </div>
  );
}

export default App;
