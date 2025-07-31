import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <Container>
          <Row>
            <Col lg={12}>
              <h1 className="about-title">About ShehriyarDev</h1>
              <p className="about-subtitle">Crafting Digital Excellence Since 2021</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Company Story */}
      <section className="about-content">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <div className="content-card">
                <h2 className="section-title"><i className="bi-building me-3"></i>Our Story</h2>
                <p className="mb-3">
                  ShehriyarDev was founded with a simple yet powerful vision: to bridge the gap between innovative technology and business success. What started as a passion project has evolved into Pakistan's trusted partner for digital transformation.
                </p>
                <p className="mb-3">
                  We believe that every business, regardless of size, deserves access to cutting-edge web solutions. Our journey began with a commitment to quality, creativity, and client satisfaction that continues to drive us today.
                </p>
                <p>
                  With over 100+ successful projects and 50+ satisfied clients, we've established ourselves as a reliable force in Pakistan's digital landscape, helping businesses thrive in the online world.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <Container>
          <Row>
            <Col lg={6} className="mb-4">
              <div className="mission-card">
                <i className="bi-bullseye mission-icon" style={{fontSize: '3rem', color: '#a855f7', marginBottom: '1rem', display: 'block', textAlign: 'center'}}></i>
                <h3 className="section-title">Our Mission</h3>
                <p>
                  To empower businesses with innovative web solutions that drive growth, enhance user experience, and create lasting digital impact. We strive to make technology accessible and profitable for every client.
                </p>
              </div>
            </Col>
            <Col lg={6} className="mb-4">
              <div className="vision-card">
                <i className="bi-eye vision-icon"></i>
                <h3 className="section-title"><i className="bi-telescope me-2"></i>Our Vision</h3>
                <p>
                  To become Pakistan's leading digital transformation partner, recognized for our innovation, quality, and commitment to client success. We envision a future where every business thrives online.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title">Meet Our Team</h2>
              <p className="about-subtitle">Passionate professionals dedicated to your success</p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <div className="team-card">
                <div className="team-avatar">
                  <i className="bi-person-fill"></i>
                </div>
                <h4 className="team-name">Muhammad Shehriyar Parvez</h4>
                <p className="team-role">Founder & Lead Developer</p>
                <p>Full-stack developer with expertise in modern web technologies and a passion for creating exceptional digital experiences.</p>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="team-card">
                <div className="team-avatar">
                  <i className="bi-palette-fill"></i>
                </div>
                <h4 className="team-name">Design Team</h4>
                <p className="team-role">UI/UX Specialists</p>
                <p>Creative designers focused on user-centered design principles and creating visually stunning, functional interfaces.</p>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="team-card">
                <div className="team-avatar">
                  <i className="bi-code-slash"></i>
                </div>
                <h4 className="team-name">Dev Team</h4>
                <p className="team-role">Technical Experts</p>
                <p>Skilled developers specializing in cutting-edge technologies, ensuring robust and scalable solutions for every project.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;