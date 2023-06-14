import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { Col, Container, Row, Button } from "react-bootstrap";
import Fullstack from "../Images/64872a1ecaff90a7965861e6.png";
function Contact() {
  return (
    <section id="contact">
      <Container className="mt-3 contactContent">
        <h1 className="text-center Title mb-5">Contacts</h1>
        <Row className="mt-4 ">
          <Col xs={12} sm={12} md={3}>
            <MdEmail className="contacts"></MdEmail>{" "}
            <a href="mailto:bebo.macis@gmail.com" className="myLinks">
              bebo.macis@gmail.com
            </a>
          </Col>{" "}
          <Col xs={12} sm={12} md={3}>
            <MdPhone className="contacts"></MdPhone>{" "}
            <span className="myLinks">+39 3477028885</span>{" "}
          </Col>
          <Col xs={12} sm={12} md={3}>
            <FaLinkedin className="contacts"></FaLinkedin>
            <a
              href="https://www.linkedin.com/in/alberto-macis-052273153/"
              className="myLinks"
            >
              Linkedin
            </a>
          </Col>{" "}
          <Col xs={12} sm={12} md={3}>
            <FaGithub className="contacts"></FaGithub>{" "}
            <a href="https://github.com/bebob94" className="myLinks">
              GitHub
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
