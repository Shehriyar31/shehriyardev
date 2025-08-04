import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = "923308193806";
  const message = "Hello! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <OverlayTrigger
      placement="left"
      overlay={<Tooltip>Chat with us on WhatsApp</Tooltip>}
    >
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-button"
      >
        <i className="bi-whatsapp"></i>
      </a>
    </OverlayTrigger>
  );
};

export default WhatsAppButton;