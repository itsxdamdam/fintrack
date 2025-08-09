import React from "react";
import TransactionTable from "../../components/TransactionTable";
import { transactionsData } from "../data";

const TransactionPage = () => {
  return (
    <div>
      <TransactionTable transactions={transactionsData} />
    </div>
  );
};

export default TransactionPage;
