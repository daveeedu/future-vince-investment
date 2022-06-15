import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Scroller from "../components/Scroller";

const Navigationbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="black" variant="light" fixed="top">
        <Container className="col ">
          <Navbar.Brand href="#home"><Link className="text-white text-decoration-none" to="./">FutureViceInvestment</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#"><Link className="text-white text-decoration-none" to="./">Home</Link></Nav.Link>
              <Nav.Link href="#"><Link className="text-white text-decoration-none" to="/AboutPage">About Us</Link></Nav.Link>
              <Nav.Link href="#"><Link className="text-white text-decoration-none" to="/Login">LogIn</Link></Nav.Link>
              <Nav.Link href="#"><Link className="text-white text-decoration-none" to="/SignUp">SignUp</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
