import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaInstagramSquare,
  FaGem,
  FaLinkedinIn,
  FaCopyright,
  FaHouseUser,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { SiFacebook, SiTwitter } from "react-icons/si";
import { InputGroup, FormControl, Modal, Button } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import cert from "../images/cert-invest.JPG";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-[#0d0f1a] text-white py-12 px-10">
      {/* Main Footer Content */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 justify-start md:grid-cols-4 gap-8">
        {/* Certificate Section */}
        <div>
          <h5 className="flex items-center text-xl font-semibold mb-4">
            <FaGem className="mr-2 text-yellow-500" />
            Certificate
          </h5>
          <img
            className="w-60 h-auto rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
            src={cert}
            alt="Certificate"
            onClick={() => setShowModal(true)}
          />
        </div>

        {/* Company Links */}
        <div className="flex flex-col items-center text-center w-full">
          <div className="w-full ">
            <h5 className="text-xl text-left md:text-center font-semibold mb-4">
              Our Company
            </h5>
            <div className="flex flex-col  space-y-2">
            <Link
                className="hover:text-yellow-500 text-left md:text-center transition text-yellow-500"
                to="/"
              >
                Home
              </Link>
              <Link
                className="hover:text-yellow-500 text-left md:text-center transition text-yellow-500"
                to="/plans"
              >
                Plans
              </Link>
              <Link
                className="hover:text-yellow-500 text-left md:text-center transition text-yellow-500"
                to="/team"
              >
                Team
              </Link>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h5 className="text-xl text-left md:text-center font-semibold mb-4">Useful Links</h5>
          <div className="flex flex-col  space-y-2">
          <Link
                to="/login"
                className="hover:text-yellow-500 text-left md:text-center transition text-yellow-500"
              >
                Login
              </Link>
              <Link
                className="hover:text-yellow-500 text-left md:text-center transition text-yellow-500"
                to="/signup"
              >
                Signup
              </Link>
              <Link
                className="hover:text-yellow-500 text-left md:text-center transition text-yellow-500"
                to="/faq"
              >
                FAQ
              </Link>
          </div>
      
        </div>

        {/* Contact Section */}
        <div>
          <h5 className="text-xl text-left md:text-center font-semibold mb-4">Contact</h5>
          <div className="flex flex-col space-y-1">
            <p className="flex items-center text-left md:text-center gap-4 text-yellow-500">  1263 Simi Town Center Way LA</p>
            <p className="flex items-center text-left md:text-center gap-4 text-yellow-500">  bitgrowinvestment.com@gmail.com</p>
            <p className="flex items-center text-left md:text-center gap-4 text-yellow-500"> +1 (510) 545-4051</p>

          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="mt-10 bg-[#1b1d2a] rounded-lg p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-400 text-center mb-4">
          Get the latest updates about our system and the global market.
        </p>
        <form className="flex justify-center">
          <InputGroup className="w-full max-w-lg">
            <FormControl
              className="bg-gray-800 text-white border-none p-3 rounded-l-lg"
              placeholder="Enter your email"
            />
            <InputGroup.Text>
              <div className="bg-yellow-500 w-full h-[100%] text-gray-800 flex items-center px-4 rounded-r-lg cursor-pointer  transition">
                <AiOutlineMail className="text-lg" />
              </div>
            </InputGroup.Text>
          </InputGroup>
        </form>
      </div>

      {/* Bottom Footer Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-4">
        <div className="flex items-center">
          <FaCopyright className="mr-2" />
          <span>2024 FredKinectics Investment. All rights reserved.</span>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-yellow-500 transition">
            <SiFacebook />
          </a>
          <a href="#" className="hover:text-yellow-500 transition">
            <FaInstagramSquare />
          </a>
          <a href="#" className="hover:text-yellow-500 transition">
            <SiTwitter />
          </a>
          <a href="#" className="hover:text-yellow-500 transition">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Certificate Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Official Certificate</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            className="w-full h-auto rounded-lg"
            src={cert}
            alt="Certificate"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Footer;
