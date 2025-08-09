import React from "react";
import TransactionTable from "../../../components/TransactionTable";
import { transactionsData } from "../../data";

const TransactionPage = () => {
  return (
    <div className="main-container">
      <h1 className="text-2xl font-bold">Transactions</h1>
      <TransactionTable transactions={transactionsData} />
    </div>
  );
};

export default TransactionPage;
