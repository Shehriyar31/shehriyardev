import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BettingExchange.css';

const BettingExchange = () => {
  const features = [
    {
      title: 'Betfair API Integration',
      description: 'Seamless integration with Betfair API for real-time odds and market data.',
      icon: 'bi-link-45deg'
    },
    {
      title: 'Admin Dashboard',
      description: 'Comprehensive admin panel for managing users, bets, and system settings.',
      icon: 'bi-speedometer2'
    },
    {
      title: 'Dealer Interface',
      description: 'Specialized interface for dealers to manage games and monitor activities.',
      icon: 'bi-person-workspace'
    },
    {
      title: 'Client UI',
      description: 'User-friendly interface for clients to place bets and view results.',
      icon: 'bi-phone'
    },
    {
      title: 'Real-time Updates',
      description: 'Live updates for odds, results, and account balances.',
      icon: 'bi-lightning'
    },
    {
      title: 'Secure Transactions',
      description: 'Bank-level security for all financial transactions and data.',
      icon: 'bi-shield-check'
    }
  ];

  const techStack = [
    { name: 'MongoDB', icon: 'bi-database' },
    { name: 'Express.js', icon: 'bi-lightning' },
    { name: 'React.js', icon: 'bi-code-slash' },
    { name: 'Node.js', icon: 'bi-server' },
    { name: 'Betfair API', icon: 'bi-link-45deg' }
  ];

  return (
    <div className="betting-page">
      {/* Hero Section */}
      <section className="betting-hero">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="betting-title">Betting Exchange Platform</h1>
              <p className="betting-subtitle">Professional betting exchange solution with Betfair API integration</p>
              <Link to="/contact" className="betting-price">PKR 500,000</Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="betting-features">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title">Platform Features</h2>
              <p className="section-subtitle">Everything you need for a complete betting exchange</p>
            </Col>
          </Row>
          <Row>
            {features.map((feature, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className="feature-card h-100">
                  <Card.Body className="text-center">
                    <i className={`${feature.icon} feature-icon`}></i>
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-description">{feature.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Tech Stack */}
      <section className="tech-stack">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title">Technology Stack</h2>
              <p className="section-subtitle">Built with modern and reliable technologies</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {techStack.map((tech, index) => (
              <Col lg={2} md={4} sm={6} key={index} className="mb-4">
                <div className="tech-item text-center">
                  <i className={`${tech.icon} tech-icon`}></i>
                  <h5 className="tech-name">{tech.name}</h5>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="betting-cta">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h2 className="cta-title">Ready to Build Your Betting Platform?</h2>
              <p className="cta-description">Contact us to discuss your requirements and get started</p>
              <Link to="/contact" className="cta-button">Get Quote Now</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default BettingExchange;