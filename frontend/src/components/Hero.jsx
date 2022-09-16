import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ isSignedUp, setIsSignedUp }) => {
  return (
    <div className="row ms-auto hero-bg pt-lg-5 pt-5rem">
      <div className="col-lg-6 text-start pt-5 ">
        <h1 className="display-1 text-light pt-5">
          Invest for the Future <br></br>{" "}
          <span className="title-spn">and Make Fast Money</span>
        </h1>
        <p className="fs-5 text-light pt-4">
          Invest in an Industry Leader, Professional, and Reliable Company. We
          provide you with the most necessary features that will make your
          experience better. Not only we guarantee the fastest and the most
          exciting returns on your investments, but we also guarantee the
          security of your investment.
        </p>
        <div className="pb-4">
          <Link
                  className="btn btn-custom mx-3 mt-4 text-decoration-none"
                  to="/SignUp"
                  onClick={(e) => setIsSignedUp(false)}
                >
                  SignUp
          </Link>
          <Link
                  className="btn btn-custom mt-4 text-decoration-none"
                  to="/Login"
                  onClick={(e) => setIsSignedUp(true)}
                >
                  LogIn
          </Link>
        </div>
      </div>
      <div className="col-lg-6"> </div>
    </div>
  );
};

export default Hero;
