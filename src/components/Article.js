import '../styles/Article.css';
import Card from 'react-bootstrap/Card';

function Article({title, Description}) {
    return (
        <div className='article'>
            <Card style={{ width: '100%' }}>
                <Card.Header>Craft Data</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{Description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
  
export default Article