import { Transaction } from '../types/Transaction';

// Lowercasing the label for case-insensitive search
export function useTransactionFilter(transactions: Transaction[], searchTerm: string) {
  return transactions.filter((transaction) =>
    transaction.label.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
