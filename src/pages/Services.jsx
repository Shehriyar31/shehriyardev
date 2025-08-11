import { Container, Row, Col, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Website Development',
      description: 'Professional single page websites with hosting included. Built using modern HTML, CSS, JavaScript and React for optimal performance. Perfect for small businesses, portfolios, and landing pages that need fast loading times and excellent user experience.',
      icon: 'bi-globe',
      features: ['Single Page', 'Fast Loading', 'SEO Optimized', 'Mobile Friendly', 'Responsive Design', 'Hosting Included'],
      price: 'PKR 8,000'
    },
    {
      title: 'Web Development',
      description: 'Complete full-stack web applications built with MERN stack for scalable and robust solutions. Includes custom functionality, user authentication, database management, and comprehensive admin panels for business operations.',
      icon: 'bi-code-slash',
      features: ['MERN Stack', 'SEO Optimized', 'Mobile Friendly', 'Responsive Design', 'Database Integration', 'Admin Panel'],
      price: 'PKR 30,000'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Comprehensive online stores with secure payment integration, advanced API development, and sophisticated inventory management systems. Features include order tracking, customer management, analytics dashboard, and multi-vendor marketplace capabilities.',
      icon: 'bi-cart',
      features: ['Payment Gateway', 'API Development', 'Inventory Management', 'Order Management', 'Analytics Dashboard', 'Multi-vendor Support'],
      price: 'PKR 70,000'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We understand your business needs and project requirements.',
      icon: 'bi-search'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Create detailed project roadmap and technical specifications.',
      icon: 'bi-clipboard-check'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your solution using modern technologies and best practices.',
      icon: 'bi-code-slash'
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Test, deploy, and provide ongoing support for your project.',
      icon: 'bi-rocket'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="services-title">Our Services</h1>
              <p className="services-subtitle">Professional web solutions tailored to your business needs</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="services-grid">
        <Container>
          <Row>
            {services.map((service, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Click to learn more about {service.title}</Tooltip>}
                >
                  <Card className="service-detail-card h-100">
                    <Card.Body>
                      <div className="service-header">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>{service.title} Service</Tooltip>}
                        >
                          <i className={`${service.icon} service-detail-icon`}></i>
                        </OverlayTrigger>
                        <h3 className="service-detail-title">{service.title}</h3>
                      </div>
                      <p className="service-detail-description">{service.description}</p>
                      <ul className="service-features">
                        {service.features.map((feature, idx) => (
                          <li key={idx}>
                            <i className="bi-check-circle me-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip>Contact us for {service.title} - {service.price}</Tooltip>}
                      >
                        <Link to="/contact" className="service-price-button">{service.price}</Link>
                      </OverlayTrigger>
                    </Card.Body>
                  </Card>
                </OverlayTrigger>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title">Our Process</h2>
              <p className="section-subtitle">How we deliver exceptional results</p>
            </Col>
          </Row>
          <Row>
            {process.map((step, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <div className="process-card text-center">
                  <div className="process-number">{step.step}</div>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>{step.title} Process</Tooltip>}
                  >
                    <i className={`${step.icon} process-icon`}></i>
                  </OverlayTrigger>
                  <h4 className="process-title">{step.title}</h4>
                  <p className="process-description">{step.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h2 className="cta-title">Ready to Start Your Project?</h2>
              <p className="cta-description">Let's discuss your requirements and create something amazing together</p>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Contact us to start your project</Tooltip>}
              >
                <Link to="/contact" className="cta-button">Get Started Today</Link>
              </OverlayTrigger>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;