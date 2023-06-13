import { Navbar, Nav } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import profileImage from "../Images/profilo.jpg"; // Importa l'immagine del profilo

function MyNavbar() {
  const [navbarBg, setNavbarBg] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 600) {
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

  return (
    <Navbar expand="lg" fixed="top" className={navbarBg ? "navbar-scroll" : ""}>
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
            href="#portfolio"
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            className={`myLink contact ${
              navbarBg ? "text-white" : "text-black"
            }`}
            href="#contact"
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default MyNavbar;
