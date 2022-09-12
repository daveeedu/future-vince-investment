import React from "react";
import Dashboard from "../../../pages/Dashboard";
import DashNavbar from "../../DashNavbar";

const Reinvest = () => {
  return (
    <div className="row feedback-bg-dash min-h-screen">
      <DashNavbar />
      <Dashboard />
      <div className="col-md-8 col-sm-10 text-strat dash-text">
        <h1 className="text-light text-start draw-hd mt-5">Withdraw</h1>
        <p className="text-light text-start draw-hd ">
          Withdraw funds from your Vince Investment account.
        </p>
        <div className="card rein-crd">
          <div className="card-body text-start ">
            <label className="card-text fw-bold  mt-3 mb-2 ">
              Withdrawal Amount
            </label>
            <input type="text" className="form-control mb-4"></input>
            <label className="card-text fw-bold text-start mb-2">
              Withdrawal Method
            </label>
            <div class="input-group mb-4">
              <select class="form-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">Bitcoin</option>
              </select>
            </div>
            <label className="card-text fw-bold text-start mb-2">
              Withdrawal Address
            </label>
            <input
              type="text"
              className="form-control "
              placeholder="31swkZUdX6byEujxGNXvowX8Lzf8cTCnyY"
            ></input>
            <button className="btn dash-btn text-start my-4">Proceed </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reinvest;
