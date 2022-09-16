
import Storage from "./storage";

const withdrawal = ({setError}) => {
  const {bank: {walletId, balance }} = Storage.get("user");
//check if withdrawal amount in input field is greated than balance then throw error "account balance not sufficient"
const validateWithdrawal = (e) => {
    const {
        value
    } = e.target;
    if (value > balance) {
        setError("account balance not sufficient");
        return false;
    }
    return true;
    }


return (
    <div>
        <div className="form-group">
        <label className="card-text fw-bold  mt-3 mb-2 ">
              Withdrawal Amount
            </label>
            <input type="number" name="amount" className="form-control mb-4" onChange={validateWithdrawal}></input>
        </div>
    </div>
)
}

export default withdrawal