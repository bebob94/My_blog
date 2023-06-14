import { Col, Container, Row, Button } from "react-bootstrap";
import Image from "../Images/photo_2023-06-11_13-57-25.jpg";
import Image2 from "../Images/photo_2023-06-11_16-27-00.jpg";
import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import MyCarousel from "./MyCarousel";
import HTML5 from "../Images/HTML5_logo_and_wordmark.svg.png";
import CSS from "../Images/CSS3_logo_and_wordmark.svg.png";
import Javascript from "../Images/javascript-logo.png";
import Eclipse from "../Images/eclipse-11-logo-svg-vector.svg";
import react from "../Images/logo.svg";
import typescript from "../Images/Typescript.svg";
import Java from "../Images/Java_Logo.svg.png";
import postgresSql from "../Images/postgresql_plain_wordmark_logo_icon_146390.png";
import visualStudio from "../Images/Visual_Studio_Code_1.35_icon.svg.png";
import { Zoom } from "react-awesome-reveal";

function About() {
  const [About, setAbout] = useState(false);

  useEffect(() => {
    setAbout(true);
  }, []);
  const [showWork, setShowWork] = useState(true);

  const toggleSection = () => {
    setShowWork(!showWork);
  };

  return (
    <section id="about">
      <Container className="pt-2">
        <h1 className="text-center Title ">
          {showWork ? "About me" : "About my hobbies"}
        </h1>
        <Row className="mt-4">
          <Col lg={3}>
            <img
              src={showWork ? Image2 : Image}
              className="imageAboutPage rounded-4"
              alt=""
            />

            <Col className="text-center mt-4">
              <Button className="ExperienceButton" onClick={toggleSection}>
                {showWork ? "Hobbies" : "Work Experience"}
              </Button>
            </Col>
          </Col>

          <Col lg={8} className="AboutContainer rounded-4">
            <Row>
              <Col md={12} className="mt-3">
                {/* Utilizza CSSTransition per animare il cambio di sezione */}
                <CSSTransition
                  in={showWork}
                  timeout={300}
                  classNames="fade"
                  unmountOnExit
                >
                  <div>
                    <p>
                      Ciao a tutti!🙋🏻‍♂️ Mi chiamo Alberto Macis, sono un ragazzo
                      con una vasta esperienza in differenti settori legati alla
                      vendita🤝🏻, rapporto e assistenza diretta al cliente🆘.
                      <br />
                      Attualmente sto ampliando le mie competenze come FullStack
                      Web Development. <br /> In data 08-06-2023 ho terminato un
                      corso intensivo da 950 ore con l'azienda Epicode Italia,
                      imparando a sviluppare applicazioni web front-end e
                      back-end e a utilizzare le tecnologie più moderne.
                    </p>
                    <Row className="justify-content-evenly">
                      <Col xs={6}>
                        <a
                          href="https://benchmark.epicode.com/credentials/64872a2fcaff90a796586293"
                          className="documents"
                        >
                          Vedi certificato
                        </a>
                      </Col>
                      <Col xs={6}>
                        {" "}
                        <a
                          href="/Curriculum.pdf"
                          download
                          className="documents"
                        >
                          Scarica Curriculum
                        </a>
                      </Col>
                    </Row>
                    <Row>
                      <h3 className="mt-5 mb-4 ">My Skills</h3>
                      <p>
                        <li>
                          Frontend: Html, Css, Sass, Javascript, React, Redux,
                          Router-Dom, Persist, TypeScript, Bootstrap, Axios.{" "}
                        </li>{" "}
                        <li>
                          Backend: Java, PostgreSQL, Maven, JJWT, Lombok, Jpa,
                          SpringBoot, Spring data, Spring Security, Spring Web.{" "}
                        </li>
                        <li>
                          General: GitHub, Git, Postman, Discord, Visual Studio
                          Code, Trello.
                        </li>
                      </p>
                    </Row>
                    <Row className="flex-nowrap ">
                      <Col className="d-flex justify-content-center">
                        <Zoom direction="left" delay={600} duration={2000}>
                          <img src={HTML5} alt="" className="loghi" />
                        </Zoom>
                        <Zoom direction="left" delay={800} duration={2000}>
                          <img src={CSS} alt="" className="loghi" />
                        </Zoom>
                        <Zoom direction="left" delay={1000} duration={2000}>
                          <img src={Javascript} alt="" className="loghi" />
                        </Zoom>
                        <Zoom direction="left" delay={1200} duration={2000}>
                          <img src={react} alt="" className="loghi" />
                        </Zoom>
                        <Zoom direction="left" delay={1400} duration={2000}>
                          <img src={typescript} alt="" className="loghi" />
                        </Zoom>
                        <Zoom direction="left" delay={1600} duration={2000}>
                          <img src={Java} alt="" className="loghi" />
                        </Zoom>
                        <Zoom direction="left" delay={1800} duration={2000}>
                          <img src={Eclipse} alt="" className="loghi" />
                        </Zoom>
                        <Zoom direction="left" delay={2000} duration={2000}>
                          <img src={postgresSql} alt="" className="loghi" />
                        </Zoom>
                        <Zoom direction="left" delay={2200} duration={2000}>
                          <img src={visualStudio} alt="" className="loghi" />
                        </Zoom>
                      </Col>
                    </Row>
                  </div>
                </CSSTransition>
              </Col>
              <Col md={12}>
                {/* Testo di esempio lorem ipsum */}
                <CSSTransition
                  in={!showWork}
                  timeout={300}
                  classNames="fade"
                  unmountOnExit
                >
                  <Row>
                    <p>
                      Come appassionato escursionista e fotografo di paesaggi
                      naturali, amo esplorare la bellezza incontaminata della
                      natura. <br />
                      Ogni cammino mi offre l'opportunità di immergermi in
                      panorami mozzafiato e catturare la loro grandiosità
                      attraverso la lente della mia macchina fotografica.📸{" "}
                      <br />
                    </p>
                    <Col xs={12} md={5} className="me-5">
                      <p>
                        I momenti trascorsi tra le montagne, i boschi e i laghi
                        mi ricaricano di energia e mi permettono di apprezzare
                        la meraviglia del mondo naturale.{" "}
                      </p>
                      <p>
                        {" "}
                        Attraverso i miei scatti, desidero condividere la
                        maestosità della natura e ispirare gli altri a scoprire
                        la gioia delle escursioni e la bellezza dei paesaggi
                        naturali.🌄
                      </p>
                    </Col>
                    <Col xs={12} md={6} className="mb-5 mt-3">
                      <MyCarousel />
                    </Col>
                  </Row>
                </CSSTransition>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
