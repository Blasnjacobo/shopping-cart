import { Row, Col } from 'react-bootstrap';
import Perfume from '../components/Cart/Perfume';
import usePerfumes from '../context/Perfumes/usePerfumes';

const Caballero = () => {
  const { perfumes, loading } = usePerfumes();
  return (
    <div>
      {loading ? (
        <h1></h1>
      ) : (
        <div>
          <h1 style={{ marginLeft: '1rem', textAlign: "center" }}>- Caballero -</h1>
          <iframe width="97%" height="315"
            src="https://www.youtube.com/embed/e2FvWGSSXTY?si=UkSXYBKUswWATKUU"
            style={{ display: 'block', margin: ' 2rem auto' }} />
          <h2 style={{ marginLeft: '1rem' }}>There is a variety of products to choose from</h2>
          <Row xs={1} md={2} lg={3} className='g-3'>
            {perfumes.filter(element => element.categoria === 'caballero').map((perfume) => (
              <Col key={perfume._id}>
                <Perfume {...perfume} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default Caballero;
