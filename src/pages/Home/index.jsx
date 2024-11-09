import '../../styles/Home.css';
import Article from '../../components/Article';
import { articleList } from '../../datas/liste_article_page.js';

function Home() {
  
  let articleElements = articleList.map(function(article) {
    return <Article Title={article.title} Description={article.desc} Page={article.page}></Article>;
  });
  return (
    <div>
      <div className="section">
        {articleElements}
      </div>
    </div>
  );
}

export default Home;