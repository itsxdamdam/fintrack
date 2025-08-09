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
    <div className="mt-5 text-[#1B2528]">
      <table className="border-seperate w-full">
        <thead>
          <tr className="text-left">
            <th
              onClick={toggleSort}
              className="table-item text-[#15272D]/60 w-84"
            >
              <div className="border-b-2 border-[#49656E]/20">
                Date {sortAsc ? "▲" : "▼"}
              </div>
            </th>
            <th className="table-item text-[#15272D]/60 w-50">
              <div className="border-b-2 border-[#49656E]/20">Remark ▼</div>
            </th>
            <th className="table-item text-[#15272D]/60 w-50">
              <div className="border-b-2 border-[#49656E]/20">Amount ▼</div>
            </th>
            <th className="table-item text-[#15272D]/60 w-50">
              <div className="border-b-2 border-[#49656E]/20">Currency ▼</div>
            </th>
            <th className="table-item text-[#15272D]/60 w-40">
              <div className="border-b-2 border-[#49656E]/20">Type ▼</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((tx, index) => (
            <tr key={index}>
              <td className="table-item hover:bg-gray-50`">
                <div className="border-b-2 border-[#49656E]/20">{tx.date}</div>
              </td>
              <td className="table-item hover:bg-gray-50">
                <div className="border-b-2 border-[#49656E]/20">
                  {tx.remark}
                </div>
              </td>
              <td className="table-item hover:bg-gray-50 font-semibold">
                <div className="border-b-2 border-[#49656E]/20">
                  {formatCurrency(tx.amount)}
                </div>
              </td>
              <td className="table-item hover:bg-gray-50">
                <div className="border-b-2 border-[#49656E]/20">
                  {tx.currency}
                </div>
              </td>
              <td className="hover:bg-gray-50 cursor-pointer">
                <div className="border-b-2 pb-2 border-[#49656E]/20">
                  <div className="table-item-status ">
                    <span
                      className={` dot ${
                        tx.amount > 0
                          ? "bg-green-600 rounded-[100%] "
                          : "bg-red-600 rounded-[100%] "
                      }`}
                    ></span>
                    {tx.type}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
