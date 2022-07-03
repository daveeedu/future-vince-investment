import React from "react";
import { Table } from "react-bootstrap";

const DepositTable = () => {
  return (
    <div>
      <Table striped bordered hover variant="dark" className="tble mb-5">
        <thead className="text-start t-head">
          <tr>
            <th colSpan={2}>Name</th>
            <th>Asset</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody className="text-start t-body">
          <tr>
            <td colSpan={2}>stefano visentini</td>
            <td>Bitcoin</td>
            <td>$100</td>
          </tr>
          <tr>
            <td colSpan={2}>bella zammit</td>
            <td>Bitcoin</td>
            <td>$300</td>
          </tr>
          <tr>
            <td colSpan={2}>tom golden</td>
            <td>Bitcoin</td>
            <td>$400</td>
          </tr>
          <tr>
            <td colSpan={2}>morten brosvik</td>
            <td>Bitcoin</td>
            <td>$550</td>
          </tr>
          <tr>
            <td colSpan={2}>thaps</td>
            <td>Bitcoin</td>
            <td>$350</td>
          </tr>
          <tr>
            <td colSpan={2}>mia shaune</td>
            <td>Bitcoin</td>
            <td>$600</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default DepositTable;
