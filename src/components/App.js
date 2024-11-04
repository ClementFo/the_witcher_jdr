import logo from '../assets/the-witcher-jdr.jpg';
import '../styles/App.css';
import Article from './Article.js';
import Header from './Header.js';

function App() {
  const articleList = [
    {title: "Composant alchimique", desc: "Ensemble des composant nécessaire pour la création de potion, decoction, d'huile ou d'article alchimique."},
    {title: "Composant d'artisanat", desc: "Composant utilisable pour la création d'arme et d'armure."},
    {title: "Formule alchimique", desc: "Formule indiquant comment créér une potion, decoction, d'huile ou d'article alchimique. Liste aussi les composants nécessaire pour cette formule."},
    {title: "Schema d'artisanat", desc: "Schéma donnant la liste des composant d'artisanat ainsi que les indiquations pour fabriquer une arme ou armure."}
  ];
  
  let articleElements = articleList.map(function(article) {
    return <Article title={article.title} Description={article.desc}></Article>;
  });
  return (
    <div>
      <Header>
        <img src={logo} alt='The witcher jdr' className='logo' />
        <h1 className='title'>Aide pour le jdr the witcher</h1>
      </Header>
      <div className="App">
        {articleElements}
      </div>
    </div>
  );
}

export default App;
