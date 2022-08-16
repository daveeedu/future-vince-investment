import React from "react";
import Dashboard from "../../../pages/Dashboard";
import DashNavbar from "../../DashNavbar";

const Reinvest = () => {
  return (
    <div className="row feedback-bg-dash vh-100">
      <DashNavbar />
      <Dashboard />
      <div className="col-md-8 dash-text">
        <div className="card rein-crd me-sm-0 me-2 ">
          <div className="card-body">
            <hr className="mt-4"></hr>
            <p className="card-text fw-bold text-start mt-5">
              Reinvestment Amount
            </p>
            <input
              type="text"
              className="form-control mb-4"
              placeholder="Enter Amount"
            ></input>
            <hr></hr>
            <div className="row text-start">
              <h6 className="text-secondary mt-4">PAYMENT DETAILS</h6>
              <div className="col-md-4">
                <h5 className="">Final Payment</h5>
                <p className="text-secondary">0.00 USD</p>
              </div>
              <div className="col-md-4">
                <h5 className="">Received Profit</h5>
                <p className="text-secondary">+ 0.00 USD</p>
              </div>
              <div className="col-md-4">
                <h5 className="">Total Payout</h5>
                <p className="text-secondary">0.00 USD</p>
              </div>
            </div>
            <button className="btn dash-btn text-start my-4">Proceed </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reinvest;
