import React, { useState } from "react";
import Dashboard from "../../../pages/Dashboard";
import { TbLock } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import EditPhoneModal from "../../modal/EditPhoneModal";
import DashNavbar from "../../DashNavbar";

const Profile = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="feedback-bg-dash-2  py-5">
      <DashNavbar />
      <Dashboard />
      <div className="col-md-9 col-sm-7 col-9 dash-text mx-sm-0  me-sm-0 pe-2  ">
        <div className="card rein-crd-5 mt-1">
          <div className="card-body mb-3 ms-2">
            <h5 className="text-start text-light">Personal Information</h5>
            <p className="card-text text-start text-light mb-5">
              Basic info, like your name and address, that you use on Vince
              Investment Investment
            </p>
            <div className="row text-start">
              <div className="col-md-12 me-sm-0 me-4 ">
                <h6 className=" my-3 basic">BASICS</h6>
                <div className="d-flex flex-sm-row flex-column justify-content-between ">
                  <h6 className=" my-3">Username</h6>
                  <p className=" my-3">Tom Golden</p>
                  <IoIosArrowForward
                    className=" my-3 edit-profile"
                    onClick={() => setModalShow(true)}
                  />
                </div>
                <hr className="text-white"></hr>

                <div className="d-flex flex-sm-row flex-column justify-content-between">
                  <h6 className=" my-3">Email</h6>
                  <p className=" my-3">daveeedu@gmail.com</p>
                  <TbLock className=" my-3" />
                </div>
                <hr className="text-white"></hr>

                <div className="d-flex flex-sm-row flex-column justify-content-between ">
                  <h6 className=" my-3">Phone</h6>
                  <p className=" my-3">08121351325</p>
                  <IoIosArrowForward
                    className=" my-3 edit-profile"
                    onClick={() => setModalShow(true)}
                  />
                </div>
                <h6 className=" my-3 basic">PREFERENCES</h6>

                <div className="d-flex flex-sm-row flex-column justify-content-between">
                  <h6 className=" my-3">Language</h6>
                  <p className=" my-3">English (United State)</p>
                </div>
                <hr className="text-white"></hr>

                <div className="d-flex flex-sm-row flex-column justify-content-between">
                  <h6 className=" my-3">Date Format</h6>
                  <p className=" my-3">DD/MM/YYYY</p>
                </div>
                <hr className="text-white"></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditPhoneModal show={modalShow} onHide={() => setModalShow(false)} />
      <EditPhoneModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Profile;
