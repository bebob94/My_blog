import MVSsport from "../Images/243340996-14b9cef7-d38d-448b-a031-6167489ccbe6.png";
import { Col, Container, Row, Card } from "react-bootstrap";

function Portfolio() {
  return (
    <section id="portfolio">
      <Container className="mt-3">
        <h1 className="text-center Title mt-4">Portfolio</h1>
        <Row>
          <Col lg={4} className="mt-4">
            <Card>
              <Card.Img variant="top" src={MVSsport} alt="Card image" />
              <Card.Body>
                <Card.Title>M.V.S.sport</Card.Title>
                <Card.Text>
                  Sito sportivo che permette di prenotare campi ed aggiungersi a
                  prenotazioni di altri utenti.
                </Card.Text>
                <div className="text-center">
                  <a
                    href="https://github.com/bebob94/MVS_Sports"
                    className="btn btn-success"
                  >
                    Link
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} className="mt-4">
            <Card className="portfolioContent">
              <Card.Img
                variant="top"
                src="images/portfolioImage4.jpg"
                alt="Card image"
              />
              <Card.Body>
                <Card.Title>Linkedin Clone</Card.Title>
                <Card.Text>
                  Clone del noto sito Linkedin con tutte le sezioni home,
                  profilo, ricerca lavoro e la possibilità di inserire post,
                  commenti e like
                </Card.Text>
                <div className="text-center">
                  <a
                    href="https://github.com/lucaf1990/Linkedin"
                    className="btn btn-success"
                  >
                    Link
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="mt-4">
            <Card className="portfolioContent">
              <Card.Img
                variant="top"
                src="images/portfolioImage3.jpg"
                alt="Card image"
              />
              <Card.Body>
                <Card.Title>Spotify Clone</Card.Title>
                <Card.Text>
                  Clone del noto sito Spotify con la possibilità di ricercare le
                  canzoni per genere autore o titolo e salvarle nei preferiti.
                </Card.Text>
                <div className="text-center">
                  <a href="#" className="btn btn-success">
                    Link
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg={4} className="mt-4">
            <Card className="portfolioContent">
              <Card.Img
                variant="top"
                src="images/portfolioImage4.jpg"
                alt="Card image"
              />
              <Card.Body>
                <Card.Title>Netflix Clone</Card.Title>
                <Card.Text>
                  Clone del noto sito Netflix, con la possibilità di ricercare i
                  film per autore e titolo.
                </Card.Text>
                <div className="text-center">
                  <a href="#" className="btn btn-success">
                    Link
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} className="mt-4">
            <Card className="portfolioContent">
              <Card.Img
                variant="top"
                src="images/portfolioImage1.jpg"
                alt="Card image"
              />
              <Card.Body>
                <Card.Title>App Meteo</Card.Title>
                <Card.Text>
                  Applicazione meteo che permette di vedere le condizioni
                  atmosferiche della località che si preferisce.
                </Card.Text>
                <div className="text-center">
                  <a href="#" className="btn btn-success">
                    Link
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} className="mt-4">
            <Card className="portfolioContent">
              <Card.Img
                variant="top"
                src="images/portfolioImage4.jpg"
                alt="Card image"
              />
              <Card.Body>
                <Card.Title>Blog App</Card.Title>
                <Card.Text>
                  Blog personale con tutti i miei dati, i miei progetti e i miei
                  contatti.
                </Card.Text>
                <div className="text-center">
                  <a href="#" className="btn btn-success">
                    Link
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Portfolio;
