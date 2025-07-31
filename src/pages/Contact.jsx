import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm(
      'service_racf3th',
      'template_mwivzpi',
      form.current,
      'nE6EN-lvKAnch6V6p'
    )
    .then((result) => {
      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', whatsapp: '', subject: '', message: '' });
      setIsLoading(false);
    })
    .catch((error) => {
      toast.error('Failed to send message. Please try again.');
      setIsLoading(false);
    });
  };

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', background: '#1a0f2e', color: '#e5e7eb' }}>
      <Container>
        <Row className="py-5">
          <Col lg={12} className="text-center mb-5">
            <h1 style={{ color: '#a855f7', fontSize: '3rem', fontWeight: '700' }}>Contact Us</h1>
            <p className="lead">Get in touch with us for your next project</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Form ref={form} onSubmit={handleSubmit} autoComplete="off" style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(168,85,247,0.2)' }}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="Enter your full name" 
                      autoComplete="off" 
                      required 
                      style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(168,85,247,0.3)', color: '#e5e7eb' }} 
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="Enter your email address" 
                      autoComplete="off" 
                      required 
                      style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(168,85,247,0.3)', color: '#e5e7eb' }} 
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>WhatsApp Number</Form.Label>
                    <Form.Control 
                      type="tel" 
                      name="whatsapp" 
                      value={formData.whatsapp} 
                      onChange={handleChange} 
                      placeholder="Enter your WhatsApp number" 
                      autoComplete="off" 
                      style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(168,85,247,0.3)', color: '#e5e7eb' }} 
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Select 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      required 
                      style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(168,85,247,0.3)', color: '#e5e7eb' }}
                    >
                      <option value="">Select a service</option>
                      <option value="one-page-website">One Page Website</option>
                      <option value="website-for-business">Website for Business</option>
                      <option value="ecommerce-store">E-Commerce Store</option>
                      <option value="betting-exchange">Betting Exchange Development</option>
                      <option value="exchange-account">Get Exchange Account</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={5} 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Tell us about your project requirements..." 
                  autoComplete="off" 
                  required 
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(168,85,247,0.3)', color: '#e5e7eb' }} 
                />
              </Form.Group>
              <Button 
                type="submit" 
                disabled={isLoading}
                style={{ background: 'linear-gradient(45deg, #a855f7, #c084fc)', border: 'none', padding: '12px 30px', borderRadius: '50px' }}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;