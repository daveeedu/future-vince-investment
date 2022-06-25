import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaInstagramSquare, FaGem, FaLinkedinIn, FaCopyright, FaHouseUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiFacebook, SiTwitter } from 'react-icons/si';
import { Link } from "react-router-dom";

const Login = () => {
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
            <Form.Label className="mt-4 text-light">Username</Form.Label>
            <Form.Control className="p-3 form-con text-light" type="password" />
          </Form.Group>
          <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
            <Form.Label className="text-light">Password</Form.Label>
            <Form.Control className="p-3 form-con text-light" type="password" />
          </Form.Group>
          <Button
            className="d-flex justify-content-start  btn-custom "
            type="submit"
          >
            <Link className="text-decoration-none" to="/DashboardTwo">Login Now</Link>
          </Button>
          <p className="text-end mt-4 text-light">Haven't an account?  <span className="title-spn">Sign Up</span></p>
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

export default Login;
