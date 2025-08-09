export interface Transaction {
  id: string;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: "Credit" | "Debit";
}

export interface DashboardSummary {
  totalBalance: number;
  totalCredits: number;
  totalDebits: number;
  transactionCount: number;
  balanceChange: number;
  creditsChange: number;
  debitsChange: number;
  transactionChange: number;
}

export interface SummaryCardData {
  title: string;
  amount: number;
  changePercent: number;
}

export interface ModalProps {
  bgColor: string;
  items: string[];
}

export interface HeaderBoxProps {
  title: string;
  status: string;
}

export interface SidebarProps {
  showSidebar: boolean
}
