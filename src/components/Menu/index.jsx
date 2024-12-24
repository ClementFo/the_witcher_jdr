import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { articleList } from '../../datas/liste_article_page.js';

function locationHashChanged(DefaultKey) {
  console.log(DefaultKey);
  var collection = document.getElementsByClassName("active");
  for(let i = 0; i < collection.length; i++){
    if(collection[i]){
      collection[i].classList.remove("active");
      document.getElementById(DefaultKey).classList.add("active");
    }
  }
}

function Menu() {
	let location = useLocation();
	const [DefaultKey, setDefaultKey] = useState(0);
  useEffect(()=>{
    if(location.pathname !== "/" && location.pathname !== ""){
      let DefaultObject = articleList.find((element) => element.href === location.pathname);
      setDefaultKey(DefaultObject.id);
    }else{
      setDefaultKey(0);
    }
  }, [location.pathname]);

  window.onhashchange = locationHashChanged(DefaultKey);
  let articleElements = articleList.map(function(data) {
    return (
    <Nav.Item key={data.id}>
        <Nav.Link id={data.id} eventKey={data.id} as={Link} to={data.page}>{data.title}</Nav.Link>
    </Nav.Item>
    );
  });
  return (
    <div className="menu">
    <Nav variant="tabs" className="justify-content-center" defaultActiveKey={DefaultKey}>
        <Nav.Item key="0">
            <Nav.Link id="0" eventKey="0" as={Link} to="/">Home</Nav.Link>
        </Nav.Item>
        {articleElements}
    </Nav>
    </div>
  );
}

export default Menu;