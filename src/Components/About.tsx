import { Col, Container, Row } from "react-bootstrap";
import Image from "../Images/photo_2023-06-11_13-57-25.jpg";
import React, { useEffect, useState } from "react";

function About() {
  const [age, setAge] = useState(29);

  const updateAge = () => {
    const currentYear = new Date().getFullYear();
    const birthYear = 1994;
    const newAge = currentYear - birthYear;
    setAge(newAge);
  };

  return (
    <section id="about">
      <Container className="mt-4 pt-4">
        <h1 className="text-center">About Me</h1>
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
              FullStack Web Development, I have graduated on June 8th 2023 in an
              intensive course with Epicode Italia, where I have learned to
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
                I deepened my skills in JavaScript, using the React framework to
                create dynamic and responsive user interfaces. I also utilized
                the Bootstrap framework to ensure responsive design and a
                professional look for my web applications. 😎🚀
                <li>
                  {" "}
                  Frontend: Html, Css, Sass, Javascript, React, Redux,
                  Router-Dom, Persist, TypeScript, Bootstrap, Axios.{" "}
                </li>{" "}
                <br />
                On the Server-side, I gained solid skills using Java and the
                Spring framework. I learned to create robust servers, manage
                databases, and develop efficient RESTful APIs. I became familiar
                with concepts such as dependency injection and implementing
                security measures. 💪💻{" "}
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
  );
}
export default About;
