import React from "react";
import { Table } from "react-bootstrap";

const withdrawalTable = () => {
  return (
    <div>
      <Table striped bordered hover variant="dark" className="tble mb-5">
        <thead className="text-start ">
          <tr className="t-head">
            <th colSpan={2}>Name</th>
            <th>Asset</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody className="text-start t-body">
          <tr className="">
            <td colSpan={2}>stefano visentini</td>
            <td>Bitcoin</td>
            <td>$118</td>
          </tr>
          <tr>
            <td colSpan={2}>marcus parker</td>
            <td>Bitcoin</td>
            <td>$2216</td>
          </tr>
          <tr>
            <td colSpan={2}>thaps</td>
            <td>Bitcoin</td>
            <td>$3000</td>
          </tr>
          <tr>
            <td colSpan={2}>mia shaune</td>
            <td>Bitcoin</td>
            <td>$130000</td>
          </tr>
          <tr>
            <td colSpan={2}>bella zammit</td>
            <td>Bitcoin</td>
            <td>$12000</td>
          </tr>
          <tr>
            <td colSpan={2}>morten brosvik</td>
            <td>Bitcoin</td>
            <td>$150000</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default withdrawalTable;
