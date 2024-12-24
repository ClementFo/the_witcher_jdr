import '../../styles/Article.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Article({Id, Title, Description, Page}) {
    return (
        <Card style={{ width: '100%' }}>
            <Card.Header>Craft Data</Card.Header>
            <Card.Body>
                <Card.Title>{Title}</Card.Title>
                <Card.Text>{Description}</Card.Text>
                <Link eventKey={Id} to={Page}>{Title}</Link>
            </Card.Body>
        </Card>
    );
}
  
export default Article