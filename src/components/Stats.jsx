import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Stats.css';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const stats = [
    { number: 100, label: 'Projects Completed', icon: 'check-circle', suffix: '+' },
    { number: 50, label: 'Happy Clients', icon: 'users', suffix: '+' },
    { number: 3, label: 'Years Experience', icon: 'calendar-check', suffix: '+' },
    { number: 24, label: 'Support Available', icon: 'headset', suffix: '/7' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.number;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = end;
              return newCounts;
            });
            clearInterval(timer);
          } else {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = Math.floor(start);
              return newCounts;
            });
          }
        }, 16);
      });
    }
  }, [isVisible]);

  return (
    <section className="stats-section" ref={sectionRef}>
      <Container>
        <Row>
          {stats.map((stat, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <div className="stat-card text-center">
                <FontAwesomeIcon icon={stat.icon} className="stat-icon" />
                <h3 className="stat-number">{counts[index]}{stat.suffix}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Stats;