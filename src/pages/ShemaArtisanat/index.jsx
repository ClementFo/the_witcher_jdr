import { ingredient, arme, armure, arme_ancienne, projectiles_ancienne, armure_ancienne, amelioration_armure } from '../../datas/schemas_artisanat.js';
import '../../styles/App.css';
import Accordeon from '../../components/Accordeon';

function SchemaArtisanat() {
  return (
    <div>
      <h2 className='title'>Schema d'artisanat</h2>
      <section>
        <h3 className="title">Ingredient</h3>
        <Accordeon DataList={ingredient}></Accordeon>
        <h3 className="title">Arme</h3>
        <Accordeon DataList={arme}></Accordeon>
        <h3 className="title">Armure</h3>
        <Accordeon DataList={armure}></Accordeon>
        <h3 className="title">Arme ancienne</h3>
        <Accordeon DataList={arme_ancienne}></Accordeon>
        <h3 className="title">Projectiles ancienne</h3>
        <Accordeon DataList={projectiles_ancienne}></Accordeon>
        <h3 className="title">Armure ancienne</h3>
        <Accordeon DataList={armure_ancienne}></Accordeon>
        <h3 className="title">Amelioration armure</h3>
        <Accordeon DataList={amelioration_armure}></Accordeon>
      </section>
    </div>
  );
}

export default SchemaArtisanat;