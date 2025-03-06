import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import logoTwo from "../images/logo2.png";
import { LogIn, UserPlus } from "lucide-react";

import config from "../utils/config";

const { pageUrls } = config;

const Navigationbar = ({ isSignedUp, setIsSignedUp }) => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.getElementById("navbar").offsetHeight;
      setIsNavbarFixed(window.scrollY > navbarHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navbar
        id="navbar"
        collapseOnSelect
        expand="lg"
        variant="black"
        className={`${isNavbarFixed ? "fixed-top bg-[#161831]" : "bg-[#161831]"}`}
      >
        <div className="w-[95%]  flex lg:justify-stretch justify-between mx-auto">
          <Navbar.Brand href="#home">
            <Link className="text-white logo text-decoration-none flex" to="./">
              <img src={logoTwo} className="w-[70%]" alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle className="bg-secondary h-11 mt-8 w-14" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="navbar-collapse-custom">
            <Nav className="ms-auto flex items-center gap-4">
              <Nav.Link href={pageUrls.home}></Nav.Link>
              <Link className="no-underline" to={pageUrls.login} onClick={() => setIsSignedUp(true)}>
                <button className="flex items-center gap-2 border-2 border-yellow-500 text-yellow-500 font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out">
                  <LogIn size={18} /> Login
                </button>
              </Link>
              <Nav.Link href={pageUrls.signup}>
                <Link className="no-underline" to={pageUrls.signup} onClick={() => setIsSignedUp(false)}>
                  <button className="flex items-center gap-2 border-2 border-yellow-500 text-yellow-500 font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out">
                    <UserPlus size={18} /> Sign Up
                  </button>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

Navigationbar.propTypes = {
  isSignedUp: propTypes.bool,
  setIsSignedUp: propTypes.func,
};

export default Navigationbar;
