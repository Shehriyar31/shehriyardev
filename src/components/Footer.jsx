import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-brand">
              <h4 className="brand-name">Shehriyar Dev</h4>
              <p className="brand-description">
                Leading web development company in Pakistan, creating innovative digital solutions for businesses.
              </p>

            </div>
          </Col>
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-links">
              <h5 className="footer-title">Quick Links</h5>
              <ul className="footer-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>


                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <div className="footer-services">
              <h5 className="footer-title">Services</h5>
              <ul className="footer-menu">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>E-commerce</li>
                <li>Digital Marketing</li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <div className="footer-contact">
              <h5 className="footer-title">Contact Info</h5>
              <div className="contact-item">
                <i className="bi-geo-alt"></i>
                <span>Pakistan</span>
              </div>
              <div className="contact-item">
                <i className="bi-whatsapp"></i>
                <a href="https://wa.me/923286257707" target="_blank" rel="noopener noreferrer" style={{color: '#cbd5e1', textDecoration: 'none'}}>
                  +92 328-6257707
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <hr className="footer-divider" />
        <Row>
          <Col lg={12} className="text-center">
            <p className="copyright">
              © 2024 Shehriyar Dev. All rights reserved. Made with <i className="bi-heart-fill text-danger"></i> in Pakistan
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
