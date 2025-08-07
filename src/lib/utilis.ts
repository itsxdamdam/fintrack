import { DashboardSummary, SummaryCardData } from "@/types";

export function dashboardSummaryToCard(
  summary: DashboardSummary
): SummaryCardData[] {
  return [
    {
      title: "Total Balance",
      amount: summary.totalBalance,
      changePercent: summary.balanceChange,
    },
    {
      title: "Total Credits",
      amount: summary.totalCredits,
      changePercent: summary.creditsChange,
    },
    {
      title: "Total Debits",
      amount: summary.totalDebits,
      changePercent: summary.debitsChange,
    },
    {
      title: "Transactions",
      amount: summary.transactionCount,
      changePercent: summary.transactionChange,
    },
  ];
}
