import React from "react";
import Dashboard from "../../../pages/Dashboard";
import { AiOutlineArrowRight } from "react-icons/ai";

const Invest = () => {
  const investPlans = [
    {
      id: 1,
      title: "Bronze Plan",
      roi: "18% ",
      min: "$100",
      max: "$999",
      days: "ROI after 6 Days",
    },
    {
      id: 2,
      title: "Silver Plan",
      roi: "21% ",
      min: "$1000",
      max: "$4999",
      days: "ROI after 6 Days",
    },
    {
      id: 3,
      title: "Diamond Plan",
      roi: "30% ",
      min: "$5000",
      max: "$9999",
      days: "ROI after 6 Days",
    },
    {
      id: 1,
      title: "Golden Plan",
      roi: "42% ",
      min: "$10000",
      max: "$10000000",
      days: "ROI after 6 Days",
    },
  ];

  return (
    <div className="row feedback-bg-dash vh-100">
      <Dashboard />
      <div className=" col-md-9 m-auto me-3 mt-1">
      <h1 className=" fw-bold  text-light text-start">Invest</h1>
      <p className="mt-2 mb-5 text-light text-start">Choose your investment plan</p>
        <div className=" row ">
          {investPlans.map((investmentPlan) => (
            <div className="card col-md-3 m-2 inv-dis" key={investmentPlan.id}>
                <div className="card-body text-start">
                  <h4 className="card-title">{investmentPlan.title}</h4>
                  <h3 className="card-text">{investmentPlan.roi}</h3>
                  <p className="card-text">Minimum: {investmentPlan.min}</p>
                  <p className="card-text">Maximum: {investmentPlan.max}</p>
                  <p className="card-text">{investmentPlan.days}</p>
                  <button className="btn dash-btn btn-inv text-start">Invest <AiOutlineArrowRight className="icon-btn"/></button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Invest;
