import { Transaction } from '../types/Transaction';
import TransactionRow from './TransactionRow';
import TransactionStats from './TransactionStats';

interface TransactionTableProps {
  readonly transactions: Transaction[];
  readonly searchTerm: string;
  readonly totalTransactions: number;
}

function TransactionTable({ transactions, searchTerm, totalTransactions }: TransactionTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
      {/* Table Header */}
      <div className="bg-gray-50 px-4 md:px-6 py-4 border-b">
        <div className="grid grid-cols-8 md:grid-cols-12 gap-4 text-sm font-medium text-gray-700">
          <div className="col-span-4 md:col-span-3">Transaction</div>
          <div className="hidden md:block md:col-span-2">From</div>
          <div className="hidden md:block md:col-span-2">To</div>
          <div className="col-span-2 md:col-span-1">Amount</div>
          <div className="hidden md:block md:col-span-2">Date</div>
          <div className="col-span-2 md:col-span-1">Status</div>
          <div className="hidden md:block md:col-span-1">Type</div>
        </div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-gray-200">
        {transactions.map((transaction) => (
          <TransactionRow key={transaction.paymentId} transaction={transaction} />
        ))}
      </div>

      {/* Empty State */}
      {transactions.length === 0 && searchTerm && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">No transactions found for "{searchTerm}"</div>
          <div className="text-gray-400 text-sm mt-2">Try adjusting your search terms</div>
        </div>
      )}

      {/* Stats */}
      <TransactionStats 
        totalTransactions={totalTransactions}
        filteredCount={transactions.length}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default TransactionTable;
