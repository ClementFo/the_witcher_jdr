import ListGroup from 'react-bootstrap/ListGroup';

function ListData({ObjectData}) {
  const items = [];
  for (const [key, value] of Object.entries(ObjectData)) {
    items.push(<ListGroup.Item>{key} : {value}</ListGroup.Item>);
  }
  return (
    <ListGroup>
      {items}
    </ListGroup>
  );
}

export default ListData;