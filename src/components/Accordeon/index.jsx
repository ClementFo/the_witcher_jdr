import Accordion from 'react-bootstrap/Accordion';
import ListData from '../ListData';

function Accordeon({DataList}) {
    let nb = 0;
    let articleElements = DataList.map(function(data) {
      nb = nb + 1;
      return (
      <Accordion.Item eventKey={nb}>
          <Accordion.Header>{data.name}</Accordion.Header>
          <Accordion.Body>
            <ListData ObjectData={data} />
          </Accordion.Body>
      </Accordion.Item>
      );
    });
    return (
        <Accordion defaultActiveKey="0">
            {articleElements}
        </Accordion>
    );
}

export default Accordeon;