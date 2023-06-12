import { Col, Container, Row, Card, Button, Form } from "react-bootstrap";

function Contact() {
  return (
    <section id="contact">
      <Container className="mt-3 contactContent">
        <h1 className="text-center">Contact Me</h1>

        <Row className="mt-4">
          <Col lg={6}>
            {/* to edit google map goto https://www.embed-map.com type your location, generate html code and copy the html */}
            <div
              style={{
                maxWidth: "100%",
                overflow: "hidden",
                color: "red",
                width: "500px",
                height: "500px",
              }}
            >
              <div
                id="embedmap-canvas"
                style={{ height: "100%", width: "100%", maxWidth: "100%" }}
              >
                <iframe
                  style={{ height: "100%", width: "100%", border: "0" }}
                  frameBorder="0"
                  src="https://www.google.com/maps/embed/v1/place?q=new+york&key=YOUR_API_KEY"
                ></iframe>
              </div>
              <a
                className="googlemaps-html"
                href="https://www.embed-map.com"
                id="get-data-forembedmap"
              >
                https://www.embed-map.com
              </a>
              <style>
                {
                  "#embedmap-canvas img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}"
                }
              </style>
            </div>
          </Col>

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
