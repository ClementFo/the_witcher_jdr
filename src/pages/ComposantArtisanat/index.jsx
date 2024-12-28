import { materiaux, origine_animale, traitements_alchimiques, lingots_mineraux } from '../../datas/composant_artisanat.js';
import '../../styles/App.css';
import Accordeon from '../../components/Accordeon';

function ComposantArtisanat() {
  return (
    <div>
      <h2 className='title'>Composants d'artisanat</h2>
      <section>
        <h3 className="title">Matériaux</h3>
        <Accordeon DataList={materiaux}></Accordeon>
        <h3 className="title">Peaux et composants d'origine animale</h3>
        <Accordeon DataList={origine_animale}></Accordeon>
        <h3 className="title">Traitements alchimique</h3>
        <Accordeon DataList={traitements_alchimiques}></Accordeon>
        <h3 className="title">Lingots et minéraux</h3>
        <Accordeon DataList={lingots_mineraux}></Accordeon>
      </section>
    </div>
  );
}

export default ComposantArtisanat;