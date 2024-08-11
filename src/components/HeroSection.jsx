import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroImage from "../assets/heroImage.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <Container
      fluid
      className="vh-100% d-flex align-items-center hero-section p-5"
    >
      <Row className="flex-md-row flex-column align-items-center">
        <Col
          data-aos="fade-up-right"
          md={6}
          className="text-center text-md-left mb-4 mb-md-0"
        >
          <h1 className="display-4">Discover the Timeless Elegance</h1>
          <p className="lead">
            Explore our exclusive collection of luxury watches designed to
            perfection.
          </p>
        </Col>
        <Col data-aos="fade-up-left" md={6} className="text-center opacity-75">
          <img
            src={heroImage}
            alt="Luxury Watch"
            className="img-fluid rounded-pill"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
