import React, { useEffect, useState } from "react";
import Image from "../Images/photo_2023-06-11_13-57-25.jpg";
import MVSsport from "../Images/243340996-14b9cef7-d38d-448b-a031-6167489ccbe6.png";
import { Col, Container, Row, Card } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLayerGroup,
  faCheckCircle,
  faSearch,
  faShieldAlt,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [age, setAge] = useState(29);
  const [navbarBg, setNavbarBg] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const updateAge = () => {
    const currentYear = new Date().getFullYear();
    const birthYear = 1994;
    const newAge = currentYear - birthYear;
    setAge(newAge);
  };
  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className={navbarBg ? "navbar-scroll" : ""}
      >
        <Navbar.Brand
          href="#"
          className={`myLink ms-5 ${navbarBg ? "text-white" : "text-black"}`}
        >
          Bebo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto">
            <Nav.Link
              className={`myLink  ${navbarBg ? "text-white" : "text-black"}`}
              href="#home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={`myLink  ${navbarBg ? "text-white" : "text-black"}`}
              href="#about"
            >
              About
            </Nav.Link>
            <Nav.Link
              className={`myLink  ${navbarBg ? "text-white" : "text-black"}`}
              href="#services"
            >
              Services
            </Nav.Link>
            <Nav.Link
              className={`myLink  ${navbarBg ? "text-white" : "text-black"}`}
              href="#portfolio"
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              className={`myLink me-5 ${
                navbarBg ? "text-white" : "text-black"
              }`}
              href="#contact"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <section className="bgimage" id="home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
              <h2 className="hero_title">Hi, it's me Bebo</h2>
              <p className="hero_desc rounded-2">
                I am a Junior Fullstack developer in Muravera city
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <Container className="mt-4 pt-4">
          <h1 className="text-center mt-5">About Me</h1>
          <Row className="mt-4">
            <Col lg={4}>
              <img src={Image} className="imageAboutPage rounded-4" alt="" />
            </Col>
            <Col lg={8}>
              <p>
                Hello everyone!🙋🏻‍♂️ My name is Alberto Macis, and I am a young man
                with extensive experience in various sales-related fields🤝🏻,
                customer relationship management, and direct customer
                assistance🆘. <br /> Currently, I am expanding my skills in
                FullStack Web Development, I have graduated on June 8th 2023 in
                an intensive course with Epicode Italia, where I have learned to
                develop both front-end and back-end web applications using the
                latest technologies.
              </p>
              <Row>
                <Col md={6}>
                  <ul>
                    <li>Name: Alberto Macis</li>
                    <li>Age: {age}</li>
                    <li>
                      Education: Accounting, Commercial Expert, and Programmer.
                    </li>
                  </ul>
                </Col>
                <Col md={6}>
                  <ul>
                    <li>Occupation: Junior Fullstack developer</li>
                    <li>Location: Muravera (SU) Sardegna Italy</li>
                    <li>Hobbies: Hiking, Nature Photography</li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <p>
                  I deepened my skills in JavaScript, using the React framework
                  to create dynamic and responsive user interfaces. I also
                  utilized the Bootstrap framework to ensure responsive design
                  and a professional look for my web applications. 😎🚀
                  <li>
                    {" "}
                    Frontend: Html, Css, Sass, Javascript, React, Redux,
                    Router-Dom, Persist, TypeScript, Bootstrap, Axios.{" "}
                  </li>{" "}
                  <br />
                  On the Server-side, I gained solid skills using Java and the
                  Spring framework. I learned to create robust servers, manage
                  databases, and develop efficient RESTful APIs. I became
                  familiar with concepts such as dependency injection and
                  implementing security measures. 💪💻{" "}
                  <li>
                    {" "}
                    Backend: Java, PostgreSQL, Maven, JJWT, Lombok, Jpa,
                    SpringBoot, Spring data, Spring Security, Spring Web.{" "}
                  </li>{" "}
                  <br />
                  Throughout the course, I worked on various practical projects
                  that allowed me to apply my skills in a real development
                  environment. I had the opportunity to work in teams, using
                  version control tools like Git to coordinate development work.
                  🤝🔧{" "}
                  <li>
                    {" "}
                    General: GitHub, Git, Postman, Discord, Visual Studio Code,
                    Trello.{" "}
                  </li>
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} className="mt-4">
              <Card className="servicesText">
                <Card.Body>
                  <FontAwesomeIcon
                    icon={faLayerGroup}
                    className="servicesIcon"
                  />
                  <h4 className="card-title mt-3">Website Design</h4>
                  <p className="card-text mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content.
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content.
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} className="mt-4">
              <Card className="servicesText">
                <Card.Body>
                  <FontAwesomeIcon
                    icon={faShieldAlt}
                    className="servicesIcon"
                  />
                  <h4 className="card-title mt-3">DevOps</h4>
                  <p className="card-text mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content.
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="portfolio">
        <Container className="mt-3">
          <h1 className="text-center mt-4">Portfolio</h1>
          <Row>
            <Col lg={4} className="mt-4">
              <Card>
                <Card.Img variant="top" src={MVSsport} alt="Card image" />
                <Card.Body>
                  <Card.Title>M.V.S.sport</Card.Title>
                  <Card.Text>
                    Sito sportivo che permette di prenotare campi ed aggiungersi
                    a prenotazioni di altri utenti.
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
                  <Card.Title>Quiz App</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
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
                  src="images/portfolioImage3.jpg"
                  alt="Card image"
                />
                <Card.Body>
                  <Card.Title>Product Landing Page</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
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
                  <Card.Title>Messaging Service</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
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
                  <Card.Title>Twitter Clone</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
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
    </>
  );
}

export default Home;
