"use client";

import React, { useState, useMemo } from "react";
import { Transaction } from "@/types";
import { formatCurrency } from "@/lib/utilis";

interface TransactionsTableProps {
  transactions: Transaction[];
}

const TransactionsTable: React.FC<TransactionsTableProps> = ({
  transactions,
}) => {
  const [sortAsc, setSortAsc] = useState(true);
  // const [searchTerm, setSearchTerm] = useState("");

  const filteredTransactions = useMemo(() => {
    return (
      transactions
        // .filter(
        //   (t) =>
        //     t.remark.toLowerCase().includes(searchTerm.toLowerCase()) ||
        //     t.type.toLowerCase().includes(searchTerm.toLowerCase())
        // )
        .sort((a, b) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return sortAsc ? dateA - dateB : dateB - dateA;
        })
    );
  }, [transactions, sortAsc]);

  const toggleSort = () => setSortAsc((prev) => !prev);

  return (
    <div className="mt-10">
      <table className="border-seperate  w-full">
        <thead>
          <tr className="text-left">
            <th onClick={toggleSort} className="table-item text-[#15272D]/60">
              Date {sortAsc ? "▲" : "▼"}
            </th>
            <th className="table-item text-[#15272D]/60">Remark</th>
            <th className="table-item text-[#15272D]/60">Amount</th>
            <th className="table-item text-[#15272D]/60">Currency</th>
            <th className="table-item text-[#15272D]/60">Type</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((tx, index) => (
            <tr key={index}>
              <td className="table-item hover:bg-gray-50`">{tx.date}</td>
              <td className="table-item hover:bg-gray-50">{tx.remark}</td>
              <td
                className={`table-item hover:bg-gray-50 font-semibold ${
                  tx.amount > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {formatCurrency(tx.amount)}
              </td>
              <td className="table-item hover:bg-gray-50">{tx.currency}</td>
              <td className="table-item hover:bg-gray-50   status">
                <span
                  className={` dot ${
                    tx.amount > 0
                      ? "bg-green-600 rounded-[100%] "
                      : "bg-red-600 rounded-[100%] "
                  }`}
                ></span>
                {tx.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
