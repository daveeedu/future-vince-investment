import React, { useEffect } from "react";
import Dashboard from "../../../pages/Dashboard";
import { AiOutlineInfoCircle } from "react-icons/ai";
import DashNavbar from "../../DashNavbar";
import BACKEND from "../../../utils/backend";

const Reinvest = () => {


  const [user, setUser] = React.useState({});

	useEffect(() => {
		new BACKEND()
			.isAuthenticated()
			.then((user) => {
        console.log(user)
				if (user) {
					setUser(user?.data);
					const {activities, ...rest} = user?.data
					// console.log(rest)
				}
			})
			.catch(console.error);
	}, []);


  return (
    <div className="row feedback-bg-dash min-h-screen overflow-x-hidden">
      <DashNavbar />
      <Dashboard />
      <div className="col-md-8 col-11 dash-text">
        <div className="card rein-crd-1">
          <div className="card-body my-3 ms-2 text-start">
            <h3 className="text-start text-dark">Refer Us & Earn</h3>
            <p className="card-text text-start">
              Invite friends and earn 10% from their deposits.
            </p>
            <label className="text-start">Invite Code</label>
            <input
              type="text"
              className="form-control mb-4"
              value={user?.userName}
            ></input>
            <label className="text-start">Wallet</label>
            <input
              type="text"
              className="form-control mb-4"
              value={user?.bank?.walletId}
            ></input>
            <div className="row text-start">
              <h6 className=" my-3">
                My Referral <AiOutlineInfoCircle />
              </h6>
              <div className="col-md-4">
                <h6 className=" ms-2">Referee</h6>
                <hr></hr>
                <p className="text-secondary ms-2">Tom Golden</p>
              </div>
              <div className="col-md-4">
                <h6 className="">Bonus</h6>
                <hr></hr>
                <p className="text-secondary">$68.5</p>
              </div>
              <div className="col-md-4">
                <h6 className="">Joined</h6>
                <hr></hr>
                <p className="text-secondary">09-04-2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reinvest;
