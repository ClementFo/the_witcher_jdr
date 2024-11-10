import { composant_alchimique } from '../../datas/composant_alchimique.js';
import '../../styles/App.css';
import Accordeon from '../../components/Accordeon';

function ComposantAlchimie() {
  return (
    <div>
      <h2>Composants d'alchimie</h2>
      <section>
        <Accordeon DataList={composant_alchimique}></Accordeon>
      </section>
    </div>
  );
}

export default ComposantAlchimie;