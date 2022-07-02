import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaInstagramSquare, FaGem, FaLinkedinIn, FaCopyright, FaHouseUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiFacebook, SiTwitter } from 'react-icons/si';
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className=" backgrnd-0 ">
      <div className="">
      <div className="signup-head signUp-border2">
            <h3 className="display-5 fw-bold text-start my-5 ms-3 me-5 text-light ">
              Welcome To <br></br>{" "}
              <span className="title-spn">Vince Investment</span>
            </h3>
          </div>
        <Form className=" signUp-border ">
          <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
            <Form.Label className="mt-4 pt-5 text-light">Name</Form.Label>
            <Form.Control className="p-3 form-con text-light" type="text" />
          </Form.Group>
          <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
            <Form.Label className="text-light">Username</Form.Label>
            <Form.Control className="p-3 form-con text-light" type="password" />
          </Form.Group>
          <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
            <Form.Label className="text-light">Email Address</Form.Label>
            <Form.Control className="p-3 form-con text-light" type="email" />
          </Form.Group>
          <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
            <Form.Label className="text-light">Confirm Email Address</Form.Label>
            <Form.Control className="p-3 form-con text-light" type="email" />
          </Form.Group>
          <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
            <Form.Label className="text-light">Country</Form.Label>
            <Form.Control className="p-3 form-con text-light" type="text" />
          </Form.Group>
          <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
            <Form.Label className="text-light">Phone Number</Form.Label>
            <Form.Control className="p-3 form-con text-light" type="phone" />
          </Form.Group>
          <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
            <Form.Label className="text-light">Bitcoin Wallet</Form.Label>
            <Form.Control className="p-3 form-con text-light" type="text" />
          </Form.Group>
          <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
            <Form.Label className="text-light">Password</Form.Label>
            <Form.Control className="p-3 form-con text-light" type="password" />
          </Form.Group>
          <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
            <Form.Label className="text-light">Confirm Password</Form.Label>
            <Form.Control
              className="p-3 form-con text-light"
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Group>
          <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
            <Form.Label className="text-light">Referral Id (Optional)</Form.Label>
            <Form.Control className="p-3 form-con text-light" type="password" />
          </Form.Group>
          <Form.Group className="mb-3 d-flex flex-row" controlId="formBasicCheckbox">
            <Form.Check className="bd-highlight " type="checkbox"  /><span className="ms-2 bd-highlight text-light">I agree with <span className="title-spn">Privacy & Policy <span className="text-light">,</span> Terms & Condition</span></span>
          </Form.Group>
          <Button
            className="d-flex justify-content-start  btn-custom "
            type="submit"
          >
            <Link className="text-decoration-none" to="/AdminDash2">SignUp Now</Link>
          </Button>
          <p className="text-start mt-4 text-light">Have an account? <span className="title-spn">Login</span></p>
        </Form>
      </div>
      <div className="row bg m-auto rights bgBlack text-white mt-5">
        <div className="col-6 mt-4 mb-2">
          <p className=""><FaCopyright /> 2022 <span>Vince Investment.</span> All rights reserved</p>
        </div>
        <div className="col-4 mt-4 mb-2">
          <a href="https://facebook.com"> 
          <SiFacebook className="me-2 text-white" /> 
          </a>
          <a href="https://instagram.com">
            <FaInstagramSquare className="me-2 text-white" />
          </a>
          <a href="https://twitter.com">
            <SiTwitter className="me-2 text-white" />
          </a>
          <a href="https://linkedin.com">
          <FaLinkedinIn className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
