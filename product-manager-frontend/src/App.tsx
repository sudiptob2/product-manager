import ProductList from './components/ProductList';
import Header from './layout/Header';
import { Container, Row, Col } from 'react-bootstrap';
import CreateProduct from './components/CreateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <div className="App">
        <Header />
        <Container className="mt-5">
          <Row>
            <Col xs={12} md={8}>
              <ProductList />
            </Col>
            <Col xs={12} md={4}>
              <CreateProduct />
            </Col>
          </Row>
        </Container>
        <ToastContainer />
    </div>
  );
}

export default App;
