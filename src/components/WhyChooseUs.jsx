import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Expert Team',
      description: 'Skilled developers with years of experience in modern technologies.',
      icon: 'users'
    },
    {
      title: 'Fast Delivery',
      description: 'Quick turnaround time without compromising on quality.',
      icon: 'bolt'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your project runs smoothly.',
      icon: 'headphones'
    },
    {
      title: 'Modern Tech',
      description: 'Using latest technologies and frameworks for best results.',
      icon: 'cog'
    },
    {
      title: 'Affordable Pricing',
      description: 'Competitive pricing without hidden costs or surprises.',
      icon: 'dollar-sign'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing to ensure bug-free and reliable solutions.',
      icon: 'shield-alt'
    }
  ];

  return (
    <section className="why-choose-section">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">Why Choose ShehriyarDev?</h2>
            <p className="section-subtitle">We deliver excellence in every project</p>
          </Col>
        </Row>
        <Row>
          {features.map((feature, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <FontAwesomeIcon icon={feature.icon} className={`feature-icon feature-icon-${index + 1}`} />
                </div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;