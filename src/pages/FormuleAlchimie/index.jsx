import { formules_alchimique, potions_sorceleur, huiles_sorceleur, decoctions_sorceleur } from '../../datas/formules_alchimique.js';
import '../../styles/App.css';
import Accordeon from '../../components/Accordeon';

function FormuleAlchimie() {
  return (
    <div>
      <h2 className='title'>Formule d'alchimie</h2>
      <section>
        <h3 className="title">Formules alchimique</h3>
        <Accordeon DataList={formules_alchimique}></Accordeon>
        <h3 className="title">Potions sorceleur</h3>
        <Accordeon DataList={potions_sorceleur}></Accordeon>
        <h3 className="title">Huiles sorceleur</h3>
        <Accordeon DataList={huiles_sorceleur}></Accordeon>
        <h3 className="title"> Decoctions sorceleur</h3>
        <Accordeon DataList={decoctions_sorceleur}></Accordeon>
      </section>
    </div>
  );
}

export default FormuleAlchimie;