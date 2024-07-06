import { Container, Row, Col } from "react-bootstrap";
import heroImage from "../assets/heroImage.webp";
const HeroSection = () => {
  return (
    <Container
      fluid
      className="vh-100% d-flex align-items-center hero-section p-5"
    >
      <Row className="flex-md-row flex-column align-items-center">
        <Col md={6} className="text-center text-md-left mb-4 mb-md-0">
          <h1 className="display-4">Discover the Timeless Elegance</h1>
          <p className="lead">
            Explore our exclusive collection of luxury watches designed to
            perfection.
          </p>
        </Col>
        <Col md={6} className="text-center">
          <img
            src={heroImage}
            alt="Luxury Watch"
            className="img-fluid rounded-circle"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
