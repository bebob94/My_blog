import { Col, Row } from "react-bootstrap";
import Image from "../Images/fa7c0900-3575-456b-9f8a-e443e3088730.jpg";
import { Zoom } from "react-awesome-reveal";
import { useState, useEffect } from "react";

function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home">
      {loaded && (
        <Row className=" ms-5 flex-nowrap justify-content-center">
          <Col xs={12} md={6} className="hero-text text-center ">
            <Zoom direction="down" delay={700} duration={3000}>
              <h2 className="hero_title">Hi, it's me Bebo</h2>
              <p className="hero_desc rounded-2">
                A Junior Fullstack developer in Muravera city
              </p>
            </Zoom>
          </Col>
          <Col xs={12} md={4} className=" my-3 text-center">
            <Zoom direction="down" delay={200} duration={2000}>
              <img src={Image} className="imageHome rounded-circle " alt="" />
            </Zoom>
          </Col>
        </Row>
      )}
    </section>
  );
}

export default Home;
