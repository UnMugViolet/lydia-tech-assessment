export interface Transaction {
  paymentId: string;
  receiverFirstname: string;
  receiverLastname: string | null;
  transactionType: string;
  memberId: number;
  label: string;
  firstname: string;
  lastname: string;
  amount: string;
  date: number;
  statusErrorDisplay: string;
  status: 'completed' | 'pending' | 'canceled';
}
