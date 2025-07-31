import { Container, Row, Col, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      icon: 'globe'
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and user-friendly designs that convert visitors to customers.',
      icon: 'palette'
    },
    {
      title: 'E-commerce',
      description: 'Complete online stores with payment integration and inventory management.',
      icon: 'shopping-cart'
    }
  ];

  return (
    <section className="services-section">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">We provide comprehensive digital solutions</p>
          </Col>
        </Row>
        <Row>
          {services.map((service, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <OverlayTrigger placement="top" overlay={<Tooltip>{service.title}</Tooltip>}>
                    <div className="service-icon">
                      <FontAwesomeIcon icon={service.icon} />
                    </div>
                  </OverlayTrigger>
                  <Card.Title className="service-title">{service.title}</Card.Title>
                  <Card.Text className="service-description">{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;