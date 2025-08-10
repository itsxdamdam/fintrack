"use client";

import React, { useState } from "react";
import OverviewTab from "./OverviewTab";
import TransactionsTable from "./TransactionTable";
import { transactionsData } from "@/app/data";

type Tabs = "Overview" | "Transactions";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<Tabs>("Overview");

  return (
    <div className="w-full mt-3">
      <div className="flex border-b-1 my-0 top-15 border-[#15272D]/20 ">
        <button
          onClick={() => setActiveTab("Overview")}
          className={`text-xl py-2 font-medium w-[200px] cursor-pointer ${
            activeTab === "Overview"
              ? "border-b-2 text-[#437D8E]"
              : "text-gray-600"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("Transactions")}
          className={`text-xl py-2 font-medium  w-[200px] left-[220px] cursor-pointer ${
            activeTab === "Transactions"
              ? "border-b-2 text-[#437D8E]"
              : "text-gray-600"
          }`}
        >
          Transactions
        </button>
      </div>

      <div>
        {activeTab === "Overview" && <OverviewTab />}
        {activeTab === "Transactions" && (
          <TransactionsTable transactions={transactionsData} />
        )}
      </div>
    </div>
  );
}
