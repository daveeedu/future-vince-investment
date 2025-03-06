import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import propTypes from "prop-types";
import { FaInstagramSquare, FaLinkedinIn, FaCopyright } from "react-icons/fa";
import { SiFacebook, SiTwitter } from "react-icons/si";
import Login from "./Login";
import Action from "../actions/signup";
import { Link } from "react-router-dom";
import config from "../utils/config";
import logoTwo from "../images/logo2.png";
import bgImage from "../images/btc-img-2.jpg";

const { pageUrls } = config;

const model = {
  Name: "",
  UserName: "",
  Email: "",
  ConfirmEmail: "",
  Country: "",
  Number: "",
  WalletId: "",
  Password: "",
  ConfirmPassword: "",
  Referrer: "",
  PrivacyPolicy: false,
  Type: "User",
};

const setState = (setFormData, value) => {
  setFormData((data) => ({ ...data, ...value }));
};

const SignUp = ({ setIsSignedUp, isSignedUp }) => {
  const [error, setError] = useState({ email: "", pass: "" });
  const [formData, setFormData] = useState(model);

  useEffect(() => {}, [formData]);

  const addData = (e) => {
    let key = e.target.getAttribute("name");
    if (key in formData) {
      setState(setFormData, { [key]: e.target.value });
    } else throw new Error("Invalid input key name in form!");
  };

  return !isSignedUp ? (
    <div className="h-screen w-full flex justify-center items-center bg-white ">
      <div
        className="flex h-[100%] bg-white w-[100%] justify-center rounded-[20px] items-center text-white "
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
		  {/* <div className="absolute bottom-8 w-full text-left px-6">
            <p className="text-gray-200 mb-4">
              Discover and cherish your most precious moments with us.
            </p>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search memories..."
                className="w-3/4 p-3 rounded-l-lg text-gray-700 bg-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 "
              />
              <button className="bg-blue-500 hover:bg-blue-600 p-[17px] rounded-r-lg text-white font-semibold">
                Search
              </button>
            </div>
          </div> */}
        </div>

        <div className="w-full md:w-1/2 h-[100%] flex justify-center items-center">
		<div className="w-[95%] h-[95%] flex flex-col justify-center  py-20 px- md:px-16 scroll lg:px-24 overflow-y-auto no-scrollbar">
		<Form
            onSubmit={async (e) => {
              e.preventDefault();
              await Action.submit(formData, setIsSignedUp);
            }}
          >
            <h2 className="text-3xl text-black font-bold mt-40 mb-6">Create Account</h2>
            <p className="text-gray-400 text-sm mb-6">
              Already have an account?{" "}
              <Link to={pageUrls.login} className="text-blue-400 hover:underline">
                Sign in
              </Link>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.keys(model).map((key, index) => (
                key !== "PrivacyPolicy" &&
                key !== "Type" && (
                  <Form.Group className="mb-3 text-start" key={index}>
                    <Form.Label className="text-gray-700">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </Form.Label>
                    <Form.Control
                      className="p-3 form-con border-2 border-gray-900 text-gray-700"
                      type={key.includes("Password") ? "password" : "text"}
                      name={key}
                      onChange={addData}
                    />
                  </Form.Group>
                )
              ))}
            </div>
            <Form.Group className="mb-3 d-flex flex-row" controlId="formBasicCheckbox">
              <Form.Check
                className="bd-highlight "
                type="checkbox"
                name="PrivacyPolicy"
                onChange={(e) => setState(setFormData, { PrivacyPolicy: e.target.checked })}
              />
              <span className="ms-2 bd-highlight text-gray-700">
                I agree with {" "}
                <span className="text-blue-400 hover:underline">
                  Privacy & Policy, Terms & Condition
                </span>
              </span>
            </Form.Group>
            <Button className="d-flex mx-auto w-[40%] flex items-center justify-center py-3 mt-[20px] btn-custom" type="submit">
              Sign Up Now
            </Button>
          </Form>
		</div>
          
        </div>
      </div>
    </div>
  ) : (
    <Login isSignedUp={isSignedUp} setIsSignedUp={setIsSignedUp} />
  );
};

SignUp.propTypes = {
  isSignedUp: propTypes.bool,
  setIsSignedUp: propTypes.func,
};

export default SignUp;
