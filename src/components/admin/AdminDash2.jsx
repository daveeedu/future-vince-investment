import React from "react";
import AdminDash from "./AdminDash";

const AdminDash2 = () => {
  return (
    <div className="admin-dash row feedback-bg-dash-3 ">
      <AdminDash />
      <div className="col-md-8 m-auto ps-5">
        <h1 className="text-light text-start ms-5 mt-5">Good day, Galant</h1>
        <p className="text-light text-start ms-5">Welcome to your admin dashboard.</p>
        <div className="row d-flex justify-content-between m-auto">
        <div className="card col-md-6 ms-5 mt-5 admin-card">
            <div className="card-body ">
              <p className="card-text fw-bold text-start mt-2">
                Total Users
              </p>
              <h4 className="card-title text-start pt-4">3680</h4>
            </div>
          </div>
          <div className="card col-md-6 ms-5 mt-5 admin-card admin-card-marg">
            <div className="card-body ">
              <p className="card-text fw-bold text-start mt-2">
                Total Investments
              </p>
              <h4 className="card-title text-start pt-4">$15,081,422.50 USD</h4>
            </div>
          </div>
          <div className="card mb-5 ms-5 mt-5">
            <div className="card-body ">
              <div className="d-flex justify-content-between">
                <p className="card-text fw-bold text-start mt-2">
                  Users Recent Activities
                </p>
                <p className="mt-2 border-2 border-primary border-bottom">
                  All
                </p>
              </div>
              <hr></hr>
              <div className="text-start font-sze">
              <span className="card-title text-start pt-3 fs-6">$300 investment confirmed</span><br></br>
              <span className="card-title text-start ">10/05/2022 08:22</span><br></br>
              <span className="card-text text-start">confirmed</span>
              </div>
              <hr></hr>
              <div className="text-start font-sze">
              <span className="card-title text-start pt-3 fs-6">$300 investment confirmed</span><br></br>
              <span className="card-title text-start ">10/05/2022 08:22</span><br></br>
              <span className="card-text text-start">confirmed</span>
              </div>
              <hr></hr>
              <div className="text-start font-sze">
              <span className="card-title text-start pt-3 fs-6">$300 investment confirmed</span><br></br>
              <span className="card-title text-start ">10/05/2022 08:22</span><br></br>
              <span className="card-text text-start">confirmed</span>
              </div>
              <hr></hr>
              <div className="text-start font-sze">
              <span className="card-title text-start pt-3 fs-6">$300 investment confirmed</span><br></br>
              <span className="card-title text-start ">10/05/2022 08:22</span><br></br>
              <span className="card-text text-start">confirmed</span>
              </div>
              <hr></hr>
              <div className="text-start font-sze">
              <span className="card-title text-start pt-3 fs-6">$300 investment confirmed</span><br></br>
              <span className="card-title text-start ">10/05/2022 08:22</span><br></br>
              <span className="card-text text-start">confirmed</span>
              </div>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDash2;
