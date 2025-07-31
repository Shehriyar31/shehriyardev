import { Container, Row, Col, Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './GetAccount.css';

const GetAccount = () => {
  const exchanges = [
    { name: 'Bpexch.net', shortName: 'BP', description: 'BP Exchange offers a comprehensive betting platform with competitive odds and reliable service.' },
    { name: 'Bpexch.pro', shortName: 'BP', description: 'Bp Exchange provides a user-friendly betting experience with a wide range of sports and casino games.' },
    { name: 'Bpexch24.com', shortName: '24', description: 'Bp Exchange24 delivers a premium betting platform with excellent customer support.' },
    { name: 'Lgexch.live', shortName: 'LG', description: 'Lg Exchange offers a feature-rich betting platform with extensive sports coverage.' },
    { name: 'Mamaexch.com', shortName: 'MM', description: 'Mama Exchange provides a royal betting experience with premium features.' },
    { name: 'Bestbet9.com', shortName: 'BB', description: 'Best Bet delivers a premium betting platform with excellent customer support.' },
    { name: 'Betmax.gold', shortName: 'BM', description: 'Bet Max offers a feature-rich betting platform with extensive sports coverage.' },
    { name: 'Bmaxexch.com', shortName: 'BX', description: 'Best Max Exchange offers comprehensive sports betting with competitive odds.' },
    { name: 'Our777.com', shortName: '777', description: 'Our 777 provides a royal betting experience with premium features.' },
    { name: 'Punjabexch.com', shortName: 'PJ', description: 'Punjab Exchange delivers a premium betting platform with excellent support.' },
    { name: 'Goldexch99.com', shortName: 'GE', description: 'Gold Exchange 99 offers comprehensive sports betting with competitive odds.' },
    { name: 'Lotusbook.io', shortName: 'LB', description: 'Lotus Book offers comprehensive sports betting with competitive odds.' }
  ];

  const accounts = [
    {
      title: 'SUPER ADMIN ACCOUNTS',
      description: 'Ultimate control with our Super Admin accounts. Manage entire network operations with supreme authority and advanced features.',
      features: ['Supreme platform authority', 'Create unlimited Admin accounts', 'Network-wide control'],
      icon: 'crown'
    },
    {
      title: 'ADMIN ACCOUNTS',
      description: 'Get full control with our premium Admin accounts. Manage your entire betting operation with comprehensive tools and features.',
      features: ['Complete platform control', 'Create unlimited Master accounts', 'Advanced reporting tools'],
      icon: 'user-shield'
    },
    {
      title: 'SUPER MASTER ACCOUNTS',
      description: 'Expand your betting business with our Super Master accounts. Create and manage multiple Master accounts with ease.',
      features: ['Create multiple Master accounts', 'Set custom commission rates', 'Comprehensive reporting'],
      icon: 'users-cog'
    },
    {
      title: 'MASTER ACCOUNTS',
      description: 'Start your betting business with our Master accounts. Create and manage Agent accounts and players with full control.',
      features: ['Create Agent accounts', 'Manage player limits', 'Real-time reporting'],
      icon: 'user-tie'
    },
    {
      title: 'USER ACCOUNTS',
      description: 'Get individual user accounts for personal betting. Perfect for players who want direct access to premium exchanges.',
      features: ['Personal betting account', 'Direct exchange access', '24/7 support'],
      icon: 'user'
    }
  ];

  return (
    <div className="get-account-page">
      {/* Premium Partners Section */}
      <section className="partners-section">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h1 className="section-title">PREMIUM PARTNERS</h1>
              <p className="section-subtitle">OUR TRUSTED EXCHANGES</p>
            </Col>
          </Row>
          <Row>
            {exchanges.map((exchange, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className="exchange-card h-100">
                  <Card.Body className="text-center">
                    <div className="exchange-logo">
                      <span className="logo-text">{exchange.shortName}</span>
                    </div>
                    <h5 className="exchange-name">{exchange.name}</h5>
                    <p className="exchange-description">{exchange.description}</p>
                    <OverlayTrigger placement="top" overlay={<Tooltip>Contact us to get {exchange.name} account</Tooltip>}>
                      <Button as={Link} to="/contact" variant="primary" className="exchange-btn">
                        Get Account
                      </Button>
                    </OverlayTrigger>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* What We Offer Section */}
      <section className="offers-section">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title">WHAT WE OFFER</h2>
            </Col>
          </Row>
          <Row>
            {accounts.map((account, index) => (
              <Col lg={6} key={index} className="mb-4">
                <Card className="account-card h-100">
                  <Card.Body>
                    <div className="account-icon">
                      <FontAwesomeIcon icon={account.icon} />
                    </div>
                    <h4 className="account-title">{account.title}</h4>
                    <p className="account-description">{account.description}</p>
                    <ul className="account-features">
                      {account.features.map((feature, idx) => (
                        <li key={idx}>
                          <FontAwesomeIcon icon="check" className="feature-check" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <OverlayTrigger placement="top" overlay={<Tooltip>Contact us for {account.title.toLowerCase()}</Tooltip>}>
                      <Button as={Link} to="/contact" variant="outline-primary" className="account-btn">
                        Get {account.title.split(' ')[0]} Account
                      </Button>
                    </OverlayTrigger>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default GetAccount;