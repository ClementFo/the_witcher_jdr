import ListGroup from 'react-bootstrap/ListGroup';

function ListData({ObjectData}) {
  const items = [];
  for (const [key, value] of Object.entries(ObjectData)) {
    if(key === "composant"){
      items.push(<ListGroup.Item key={key}>{key} : {value.join(", ")}</ListGroup.Item>);
    }else{
      items.push(<ListGroup.Item key={key}>{key} : {value}</ListGroup.Item>);
    }
  }
  return (
    <ListGroup>
      {items}
    </ListGroup>
  );
}

export default ListData;