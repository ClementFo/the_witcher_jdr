import '../styles/Card.css';

function Card({title, Description}) {
    return (
        <article className="article">
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                <p>{Description}</p>
            </div>
        </article>
    );
}
  
export default Card