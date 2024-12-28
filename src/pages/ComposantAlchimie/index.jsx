import { vitriol, rebis, ether, quebrith, hydragenum, vermillon, sol, caelum, fulgur } from '../../datas/composant_alchimique.js';
import '../../styles/App.css';
import Accordeon from '../../components/Accordeon';

function ComposantAlchimie() {
  return (
    <div>
      <h2 className='title'>Composants d'alchimie</h2>
      <section>
        <h3 className="title">Vitriol</h3>
        <Accordeon DataList={vitriol}></Accordeon>
        <h3 className="title">Rebis</h3>
        <Accordeon DataList={rebis}></Accordeon>
        <h3 className="title">Ether</h3>
        <Accordeon DataList={ether}></Accordeon>
        <h3 className="title">Quebrith</h3>
        <Accordeon DataList={quebrith}></Accordeon>
        <h3 className="title">Hydragenum</h3>
        <Accordeon DataList={hydragenum}></Accordeon>
        <h3 className="title">Vermillon</h3>
        <Accordeon DataList={vermillon}></Accordeon>
        <h3 className="title">Sol</h3>
        <Accordeon DataList={sol}></Accordeon>
        <h3 className="title">Caelum</h3>
        <Accordeon DataList={caelum}></Accordeon>
        <h3 className="title">Fulgur</h3>
        <Accordeon DataList={fulgur}></Accordeon>
      </section>
    </div>
  );
}

export default ComposantAlchimie;