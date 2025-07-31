import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Web Development', 'Mobile Apps', 'UI/UX Design', 'Digital Solutions'];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6}>
            <div className="hero-content">
              <h1 className="hero-title">
                Best <span className="gradient-text">{text}</span>
                <span className="cursor">|</span>
              </h1>
              <h2 className="hero-subtitle">Company in Pakistan</h2>
              <p className="hero-description">
                We create stunning websites and digital solutions that help your business grow and succeed in the digital world.
              </p>
              <div className="hero-buttons">
                <OverlayTrigger placement="top" overlay={<Tooltip>Start your project with us</Tooltip>}>
                  <Button as={Link} to="/contact" variant="primary" size="lg" className="me-3 custom-btn">
                    Get Started
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip>Get premium betting exchange account</Tooltip>}>
                  <Button as={Link} to="/betting-exchange" variant="outline-light" size="lg" className="custom-btn-outline">
                    Get Exchange Account
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="hero-image">
              <div className="floating-card">
                <div className="code-snippet">
                  <div className="code-header">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <div className="code-body">
                    <p>&lt;div className="success"&gt;</p>
                    <p>&nbsp;&nbsp;Your Dream Website</p>
                    <p>&lt;/div&gt;</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;