import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Technologies.css';

const Technologies = () => {
  const technologies = [
    { name: 'HTML', icon: ['fab', 'html5'] },
    { name: 'CSS', icon: ['fab', 'css3-alt'] },
    { name: 'JavaScript', icon: ['fab', 'js'] },
    { name: 'Bootstrap', icon: ['fab', 'bootstrap'] },
    { name: 'React', icon: ['fab', 'react'] },
    { name: 'Node.js', icon: ['fab', 'node'] },
    { name: 'Express', icon: 'server' },
    { name: 'MongoDB', icon: 'database' }
  ];

  return (
    <section className="technologies-section">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">Technologies We Use</h2>
            <p className="section-subtitle">Modern tech stack for powerful solutions</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {technologies.map((tech, index) => (
            <Col lg={2} md={3} sm={4} key={index} className="mb-4">
              <div className="tech-card text-center">
                <div className="tech-icon-wrapper">
                  <FontAwesomeIcon icon={tech.icon} className={`tech-icon tech-icon-${index + 1}`} />
                </div>
                <h5 className="tech-name">{tech.name}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Technologies;