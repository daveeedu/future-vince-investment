import React from "react";
import Dashboard from "../../../pages/Dashboard";
import Storage from "../../../utils/storage";
import DashNavbar from "../../DashNavbar";
import BACKEND from "../../../utils/backend";
const Reinvest = () => {
  const {bank: {walletId}} = Storage.get("user");

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {target} = e;

    const payload = {
      amount: target.amount.value,
      method: target.method.value,
      walletId: target.walletId.value
    }
     await new BACKEND().withdraw(payload);
  }
  return (
    <div className="row feedback-bg-dash min-h-screen">
      <DashNavbar />
      <Dashboard />
      <div className="col-md-8 col-sm-10 text-strat dash-text">
        <h1 className="text-light text-start draw-hd mt-3">Withdraw</h1>
        <p className="text-light text-start draw-hd ">
          Withdraw funds from your Vince Investment account.
        </p>
        <form onSubmit={handleSubmit} className="card rein-crd">
          <div className="card-body text-start ">
            <label className="card-text fw-bold  mt-3 mb-2 ">
              Withdrawal Amount
            </label>
            <input type="number" name="amount" className="form-control mb-4"></input>
            <label className="card-text fw-bold text-start mb-2">
              Withdrawal Method
            </label>
            <div class="input-group mb-4">
              <select name="method" class="form-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="bitcoin">Bitcoin</option>
              </select>
            </div>
            <label className="card-text fw-bold text-start mb-2">
              Withdrawal Address
            </label>
            <input
            name="walletId"
              type="text"
              className="form-control"
              value={walletId}
              placeholder="31swkZUdX6byEujxGNXvowX8Lzf8cTCnyY"
            ></input>
            <button type="submit" className="btn dash-btn text-start my-4">Proceed</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reinvest;
