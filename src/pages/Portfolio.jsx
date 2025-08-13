import { Container, Row, Col, Card } from 'react-bootstrap';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Business Website',
      description: 'Modern business website built with Vite and React for fast performance and smooth user experience.',
      tech: 'Vite, React, Bootstrap',
      image: img1
    },
    {
      title: 'YouTube Video Downloading Website',
      description: 'Fast and reliable YouTube video downloader with clean interface built using modern web technologies.',
      tech: 'React, Bootstrap, Vite',
      image: img2
    },
    {
      title: 'HTML CSS Image Creator',
      description: 'Interactive web tool that allows users to create and design images using pure HTML and CSS code.',
      tech: 'React, Vite, Bootstrap',
      image: img3
    },
    {
      title: 'Social Media Downloader',
      description: 'All-in-one social media downloader for TikTok, Facebook, and Instagram reels and videos with fast download speeds.',
      tech: 'React, Bootstrap',
      image: img4
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application using OpenWeather API with current conditions, forecasts, and location-based weather updates.',
      tech: 'React, Vite',
      image: img5
    },
    {
      title: 'Todo List Manager',
      description: 'Interactive task management application with add, edit, delete functionality and local storage for persistent data.',
      tech: 'React, Bootstrap, Vite',
      image: img6
    },
    {
      title: 'Password Manager',
      description: 'Secure password storage application where users can safely save and manage multiple passwords with encryption.',
      tech: 'React, Bootstrap, Vite',
      image: img7
    }
  ];

  return (
    <div className="portfolio-page">
      <Container>
        <Row className="py-5">
          <Col lg={12} className="text-center mb-5">
            <h1 className="portfolio-title">Our Portfolio</h1>
            <p className="portfolio-subtitle">Check out our recent projects and work</p>
          </Col>
        </Row>
        <Row>
          {projects.map((project, index) => (
            <Col lg={6} md={6} key={index} className="mb-4">
              <Card className="portfolio-card h-100">
                <Card.Body className="text-center">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} className="portfolio-img" />
                  </div>
                  <Card.Title className="project-title">{project.title}</Card.Title>
                  <Card.Text className="project-description">{project.description}</Card.Text>
                  <div className="project-tech">{project.tech}</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;