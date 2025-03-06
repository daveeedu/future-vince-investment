import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import DepositTable from "./DepositTable";
import WithdrawalTable from "./WithdrawalTable";
import bgImage from "../images/bitcoins-mining-concept_173387-677.avif";

const DepositAndWithdrawal = () => {
  return (
    <div
      className="relative py-16 text-center bg-[#0d0f1a] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-[95%]"></div>

      {/* Content Section */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Deposit & <span className="text-yellow-500">Withdrawals</span>
        </h1>
        <p className="text-gray-400 text-lg mt-3">
          Track the latest deposits and withdrawals in real-time.
        </p>

        {/* Tabs Container */}
        <div className="mt-10 max-w-3xl mx-auto">
          <Tabs
            defaultActiveKey="withdrawals"
            id="transaction-tabs"
            className="flex justify-center border-b border-gray-600"
            variant="pills"
          >
            {/* Deposit Tab */}
            <Tab
              eventKey="deposits"
              title={
                <span className="text-white text-lg font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:bg-yellow-500 hover:text-black cursor-pointer">
                  Latest Deposits
                </span>
              }
            >
              <div className="mt-6">
                <DepositTable />
              </div>
            </Tab>

            {/* Withdrawal Tab */}
            <Tab
              eventKey="withdrawals"
              title={
                <span className="text-white text-lg font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:bg-yellow-500 hover:text-black cursor-pointer">
                  Latest Withdrawals
                </span>
              }
            >
              <div className="mt-6">
                <WithdrawalTable />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DepositAndWithdrawal;
