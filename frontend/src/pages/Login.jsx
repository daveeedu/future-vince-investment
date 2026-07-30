import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaInstagramSquare, FaLinkedinIn, FaCopyright } from "react-icons/fa";
import { SiFacebook, SiTwitter } from "react-icons/si";
import propTypes from "prop-types";
import SignUp from "./SignUp";
import BACKEND from "../services/backend.js";
import Storage from "../lib/storage.js";
import config from "../config/app.config.js";
import { Link } from "react-router-dom";
import logoTwo from "../images/logo2.png";
import bgImage from "../images/btc-img-2.jpg";

const { pageUrls } = config;

const Login = ({ isSignedUp, setIsSignedUp }) => {
  const API = new BACKEND();
  const model = { email: "", password: "" };
  const [formData, setFormData] = useState(model);

  const setState = (setFormData, value) => {
    setFormData((data) => ({ ...data, ...value }));
  };

  const addData = (e) => {
    let key = e.target.getAttribute("name");
    if (key in formData) {
      setState(setFormData, { [key]: e.target.value });
    } else throw new Error("Invalid input key name in form!");
  };

  const signin = async (payload) => {
    const res = await API.login(payload);
    if (res) {
      Storage.set("token", res.data);
      window.location.href =
        res.data.type.toLowerCase() === "user"
          ? "/user/dashboard"
          : "/admin/dashboard";
    }
  };

  return !isSignedUp ? (
    <div className="h-screen w-full flex justify-center items-center bg-white">
      <div
        className="flex h-[100%] bg-white w-[100%] justify-center rounded-[20px] items-center text-white"
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}
      >
        <div
          className="hidden md:flex flex-1 h-full items-center justify-center bg-[#1a1a2e] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-[#0d0f1a] bg-opacity-[75%]"></div>
          <div className="absolute top-4 left-4">
            <img src={logoTwo} className="w-[50%]" alt="Logo" />
          </div>
		  <div className="absolute top-40 items-left  text-left px-11">
            <h1 className="text-white text-[80px] font-bold">Explore The Largest <span className="text-yellow-500">BTC</span> Trading Platform <br/></h1>
            <p className="text-gray-300 mt-4 text-2xl max-w-[60%]">Join us and start your journey with the most advanced and secure trading platform.</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24">
          <Form
            onSubmit={async (e) => {
              e.preventDefault();
              await signin(formData);
            }}
          >
            <h2 className="text-3xl text-black font-bold mb-6">Sign In</h2>
            <p className="text-gray-400 text-sm mb-6">
              Don't have an account?{" "}
              <Link
                to={pageUrls.signup}
                className="text-blue-400 hover:underline"
              >
                Sign up
              </Link>
            </p>
            <Form.Group className="mb-3 text-start">
              <Form.Label className="mt-4 text-gray-700">
                Email Address
              </Form.Label>
              <Form.Control
                className="p-3 form-con border-2 border-gray-900 text-gray-700"
                type="email"
                placeholder="joedoe@gmail.com"
                name="email"
                onChange={addData}
              />
            </Form.Group>
            <Form.Group className="mb-3 text-start">
              <Form.Label className="text-gray-700">Password</Form.Label>
              <Form.Control
                className="p-3 form-con text-gray-700"
                type="password"
                placeholder="Input Password"
                name="password"
                onChange={addData}
              />
            </Form.Group>
            <Button className="d-flex mx-auto w-[40%] flex items-center justify-center py-3 mt-[20px] btn-custom" type="submit">
              Login 
            </Button>
          </Form>
        </div>
      </div>
    </div>
  ) : (
    <SignUp isSignedUp={isSignedUp} setIsSignedUp={setIsSignedUp} />
  );
};

Login.propTypes = {
  isSignedUp: propTypes.bool,
  setIsSignedUp: propTypes.func,
};

export default Login;
