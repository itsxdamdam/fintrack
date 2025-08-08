import React from "react";
import HeaderBox from "./HeaderBox";
import Tabs from "./Tabs";

const Dashboard = () => {
  return (
    <section className="w-full">
      <HeaderBox title={"Wallet Ledger"} status="Active" />
      <Tabs />
    </section>
  );
};

export default Dashboard;
