import { Col, Container, Row, Card, Button, Form } from "react-bootstrap";

function Contact() {
  return (
    <section id="contact">
      <Container className="mt-3 contactContent">
        <h1 className="text-center Title">Contact Me</h1>

        <Row className="mt-4">
          <Col lg={6}>
            {/* form fields */}
            <Form>
              <Form.Control
                type="text"
                placeholder="Name"
                className="form-control-lg"
              />
              <Form.Control
                type="email"
                placeholder="Email"
                className="form-control mt-3"
              />
              <Form.Control
                type="text"
                placeholder="Subject"
                className="form-control mt-3"
              />
              <Form.Control
                as="textarea"
                rows={5}
                id="comment"
                name="text"
                placeholder="Project Details"
                className="form-control mt-3"
              />
            </Form>
            <Button variant="success" className="mt-3">
              Contact Me
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Contact;
