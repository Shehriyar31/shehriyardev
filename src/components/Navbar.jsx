import { Navbar, Nav, Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/ShehriyarDev-01.png';
import './Navbar.css';

const CustomNavbar = () => {
  return (
    <Navbar variant="dark" expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <img src={logo} alt="ShehriyarDev" className="navbar-logo" />
          <span className="brand-text">Shehriyar Dev</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <OverlayTrigger placement="bottom" overlay={<Tooltip>Go to homepage</Tooltip>}>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={<Tooltip>Learn about our company</Tooltip>}>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={<Tooltip>View our services</Tooltip>}>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={<Tooltip>View our portfolio</Tooltip>}>
              <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
            </OverlayTrigger>


            <OverlayTrigger placement="bottom" overlay={<Tooltip>Contact us for inquiries</Tooltip>}>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;