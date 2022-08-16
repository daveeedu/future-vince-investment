import React from "react";
import Dashboard from "./Dashboard";
import BACKEND from "../utils/backend";
import DashNavbar from "../components/DashNavbar";

const DashboardTwo = () => {
  return (
    <div className="feedback-bg-dash-2 overflow-x-hidden ">
      <DashNavbar />
      <div className="row dash-text">
        <Dashboard />
        <div className="col-md-8 row h-screen">
          <h3 className="text-start text-light draw-hd-1">
            Good day, Marcuspp
          </h3>
          <p className="text-start text-light draw-hd-2">
            Welcome to Vince Investment
          </p>
          <div className="col-md-6 rein-crd-3">
            <div className="card mb-3">
              <div className="card-body ">
                <p className="card-text fw-bold text-start mt-2">
                  Available balance
                </p>
                <h4 className="card-title text-start pt-4">$7081422.50 USD</h4>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body ">
                <p className="card-text fw-bold text-start mt-2">
                  Total Invested
                </p>
                <h4 className="card-title text-start pt-4">$1550300.00 USD</h4>
              </div>
            </div>
            <div className="card mb-5">
              <div className="card-body ">
                <p className="card-text fw-bold text-start mt-2">
                  Total Profits
                </p>
                <h4 className="card-title text-start pt-4">$651054.00 USD</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6 rein-crd-4">
            <div className="card mb-3">
              <div className="card-body ">
                <div className="d-flex justify-content-between">
                  <p className="card-text fw-bold text-start mt-2">
                    Recent Activities
                  </p>
                  <p className="mt-2 border-2 border-primary border-bottom">
                    All
                  </p>
                </div>
                <hr></hr>
                <div className="text-start font-sze">
                  <span className="card-title text-start pt-3 fs-6">
                    $300 investment confirmed
                  </span>
                  <br></br>
                  <span className="card-title text-start ">
                    10/05/2022 08:22
                  </span>
                  <br></br>
                  <span className="card-text text-start">confirmed</span>
                </div>
                <hr></hr>
                <div className="text-start font-sze">
                  <span className="card-title text-start pt-3 fs-6">
                    $300 investment confirmed
                  </span>
                  <br></br>
                  <span className="card-title text-start ">
                    10/05/2022 08:22
                  </span>
                  <br></br>
                  <span className="card-text text-start">confirmed</span>
                </div>
                <hr></hr>
                <div className="text-start font-sze">
                  <span className="card-title text-start pt-3 fs-6">
                    $300 investment confirmed
                  </span>
                  <br></br>
                  <span className="card-title text-start ">
                    10/05/2022 08:22
                  </span>
                  <br></br>
                  <span className="card-text text-start">confirmed</span>
                </div>
                <hr></hr>
                <div className="text-start font-sze">
                  <span className="card-title text-start pt-3 fs-6">
                    $300 investment confirmed
                  </span>
                  <br></br>
                  <span className="card-title text-start ">
                    10/05/2022 08:22
                  </span>
                  <br></br>
                  <span className="card-text text-start">confirmed</span>
                </div>
                <hr></hr>
                <div className="text-start font-sze">
                  <span className="card-title text-start pt-3 fs-6">
                    $300 investment confirmed
                  </span>
                  <br></br>
                  <span className="card-title text-start ">
                    10/05/2022 08:22
                  </span>
                  <br></br>
                  <span className="card-text text-start">confirmed</span>
                </div>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTwo;
