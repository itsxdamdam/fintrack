"use client";

import React, { useState } from "react";

type Tabs = "Overview" | "Transactions";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<Tabs>("Overview");

  return (
    <div className="w-full mt-8 relative">
      <div className="flex border-b-3 my-0 top-15 border-[#15272D]/20 relative">
        <button
          onClick={() => setActiveTab("Overview")}
          className={`text-2xl py-3 font-medium absolute bottom-[-3px] w-[200px] cursor-pointer ${
            activeTab === "Overview"
              ? "border-b-3 text-[#437D8E]"
              : "text-gray-600"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("Transactions")}
          className={`text-2xl py-3 font-medium absolute bottom-[-3px] w-[200px] left-[220px] cursor-pointer ${
            activeTab === "Transactions"
              ? "border-b-3 text-[#437D8E]"
              : "text-gray-600"
          }`}
        >
          Transactions
        </button>
      </div>

      <div className="absolute top-20">
        {activeTab === "Overview" && (
          <div className="text-gray-800">This is content for Tab 1</div>
        )}
        {activeTab === "Transactions" && (
          <div className="text-gray-800">This is content for Tab 2</div>
        )}
      </div>
    </div>
  );
}
