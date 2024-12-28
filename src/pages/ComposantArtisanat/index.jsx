import { composant_artisanat } from '../../datas/composant_artisanat.js';
import '../../styles/App.css';
import Accordeon from '../../components/Accordeon';

function ComposantArtisanat() {
  return (
    <div>
      <h2 className='title'>Composants d'artisanat</h2>
      <section>
        <Accordeon DataList={composant_artisanat}></Accordeon>
      </section>
    </div>
  );
}

export default ComposantArtisanat;