import { Col, Row } from "react-bootstrap";
import Image from "../Images/photo_2023-06-13_14-00-54.jpg";
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
        <Zoom direction="up" delay={500} duration={2000}>
          <Row className="mt-5">
            <Col xs={12} md={6} className="hero-text text-center mt-5">
              <h2 className="hero_title">Hi, it's me Bebo</h2>
              <p className="hero_desc rounded-2">
                A Junior Fullstack developer in Muravera city
              </p>
            </Col>

            <Col xs={12} md={4} className=" my-3 text-center">
              <img src={Image} className="imageHome rounded-circle " alt="" />
            </Col>
          </Row>
        </Zoom>
      )}
    </section>
  );
}

export default Home;
