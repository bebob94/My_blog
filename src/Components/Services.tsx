import { Col, Container, Row, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLayerGroup,
  faCheckCircle,
  faSearch,
  faShieldAlt,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <section id="services">
      <Container>
        <h1 className="text-center">Services</h1>
        <Row>
          <Col lg={4} className="mt-4">
            <Card className="servicesText">
              <Card.Body>
                <FontAwesomeIcon icon={faClock} className="servicesIcon" />
                <h4 className="card-title mt-3">Website Development</h4>
                <p className="card-text mt-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="mt-4">
            <Card className="servicesText">
              <Card.Body>
                <FontAwesomeIcon icon={faLayerGroup} className="servicesIcon" />
                <h4 className="card-title mt-3">Website Design</h4>
                <p className="card-text mt-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="mt-4">
            <Card className="servicesText">
              <Card.Body>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="servicesIcon"
                />
                <h4 className="card-title mt-3">Website Deployment</h4>
                <p className="card-text mt-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={4} className="mt-4">
            <Card className="servicesText">
              <Card.Body>
                <FontAwesomeIcon icon={faSearch} className="servicesIcon" />
                <h4 className="card-title mt-3">SEO</h4>
                <p className="card-text mt-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="mt-4">
            <Card className="servicesText">
              <Card.Body>
                <FontAwesomeIcon icon={faShieldAlt} className="servicesIcon" />
                <h4 className="card-title mt-3">DevOps</h4>
                <p className="card-text mt-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="mt-4">
            <Card className="servicesText">
              <Card.Body>
                <FontAwesomeIcon icon={faWrench} className="servicesIcon" />
                <h4 className="card-title mt-3">QA</h4>
                <p className="card-text mt-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Services;
