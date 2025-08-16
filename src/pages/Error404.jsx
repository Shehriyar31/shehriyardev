import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Error404.css';

const Error404 = () => {
  return (
    <div className="error-page">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col lg={8} className="text-center">
            <div className="error-content">
              <div className="error-number">404</div>
              <h1 className="error-title">Page Not Found</h1>
              <p className="error-description">
                Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
              </p>
              <div className="error-actions">
                <Button as={Link} to="/" className="home-btn">
                  <i className="bi-house me-2"></i>
                  Go Home
                </Button>
                <Button as={Link} to="/contact" variant="outline-light" className="contact-btn">
                  <i className="bi-envelope me-2"></i>
                  Contact Us
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Error404;