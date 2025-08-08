import React from "react";
import SummaryCards from "./SummaryCards";
import { dashboardSummaryToCard } from "@/lib/utilis";
import { dashboardSummary } from "@/app/data";

const Summary = () => {
  return (
    <section className="w-full mt-6">
      <h3 className="text-3xl font-bold">Summary</h3>
      <div className="mt-6">
        <SummaryCards data={dashboardSummaryToCard(dashboardSummary)} />
      </div>
    </section>
  );
};

export default Summary;
