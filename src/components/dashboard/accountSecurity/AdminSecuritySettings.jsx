import React from "react";
import AdminDash from "../../admin/AdminDash";

const AdminSecuritySettings = () => {
  return (
    <div className="row feedback-bg-dash vh-100">
      <AdminDash />
      <div className="col-md-8 text-start">
        <p className="text-light  fw-bold draw-hd-0 ">Security Settings</p>
        <div className="card rein-crd-2">
          <div className="card-body row">
            <div className="col-md-8">
            <p className="card-text fw-bold text-start dash-text">Change Password</p>
            <p className="card-text text-start mb-5">Set a unique password to protect your account.</p>
            </div>
            <div className=" text-start col-md-4 text-end">
            <button className="btn dash-btn text-start mt-3">Change Password</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSecuritySettings;
