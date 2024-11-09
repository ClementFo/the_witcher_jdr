import '../../styles/Article.css';
import Card from 'react-bootstrap/Card';
import { Outlet, Link } from 'react-router-dom'

function Article({Title, Description, Page}) {
    return (
        <div className='article'>
            <Card style={{ width: '100%' }}>
                <Card.Header>Craft Data</Card.Header>
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>{Description}</Card.Text>
                    <Link to={Page}>{Page}</Link>
                </Card.Body>
            </Card>
        </div>
    );
}
  
export default Article