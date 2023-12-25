import { Container, Row, Col } from 'react-bootstrap';

const FormContainer = ({ children }) => {
  return (
    <div className='h-[100vh] flex justify-center text-white border-2'>
      <Row className='justify-content-md-center mt-5 border-2'>
        <Col xs={12} md={6} className='card border-2 p-5'>
          {children}
        </Col>
      </Row>
    </div>
  );
};

export default FormContainer;
