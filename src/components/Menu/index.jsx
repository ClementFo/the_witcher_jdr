import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { articleList } from '../../datas/liste_article_page.js';

function Menu() {
	let location = useLocation();
	const [DefaultKey, setDefaultKey] = useState(0);
  useEffect(()=>{
    if(location.pathname !== "/" && location.pathname !== ""){
      let DefaultObject = articleList.find((element) => element.href = location.pathname);
      setDefaultKey(DefaultObject.id);
      
      console.log(location.pathname);
    }
  }, [location.pathname]);
	console.log(DefaultKey);
  let articleElements = articleList.map(function(data) {
    return (
    <Nav.Item key={data.id}>
        <Nav.Link eventKey={data.id} as={Link} to={data.page}>{data.title}</Nav.Link>
    </Nav.Item>
    );
  });
  return (
    <div className="menu">
    <Nav variant="tabs" className="justify-content-center" defaultActiveKey={DefaultKey}>
        <Nav.Item key="0">
            <Nav.Link eventKey="0" as={Link} to="/">Home</Nav.Link>
        </Nav.Item>
        {articleElements}
    </Nav>
    </div>
  );
}

export default Menu;