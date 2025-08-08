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

export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

export const formatDate = (value: string): string =>
  new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
  }).format(new Date(value));
