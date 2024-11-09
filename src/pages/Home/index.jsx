import logo from '../../assets/the-witcher-jdr.jpg';
import '../../styles/Home.css';
import Article from '../../components/Article';
import Header from '../../components/Header';
import { articleList } from '../../datas/liste_article_page.js';

function Home() {
  
  let articleElements = articleList.map(function(article) {
    return <Article Title={article.title} Description={article.desc} Page={article.page}></Article>;
  });
  return (
    <div>
      <Header>
        <img src={logo} alt='The witcher jdr' className='logo' />
        <h1 className='title'>Aide pour le jdr the witcher</h1>
      </Header>
      <div className="section">
        {articleElements}
      </div>
    </div>
  );
}

export default Home;