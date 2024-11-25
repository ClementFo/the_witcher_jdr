import Accordion from 'react-bootstrap/Accordion';
import ListData from '../ListData';

function Accordeon({DataList}) {
    let nb = 0;
    let articleElements = DataList.map(function(data) {
      nb = nb + 1;
      return (
        <div key={nb}>
          <Accordion.Item eventKey={nb}>
              <Accordion.Header>{data.name}</Accordion.Header>
              <Accordion.Body>
                <ListData key={nb} ObjectData={data} />
              </Accordion.Body>
          </Accordion.Item>
        </div>
      );
    });
    return (
        <Accordion defaultActiveKey="0">
            {articleElements}
        </Accordion>
    );
}

export default Accordeon;