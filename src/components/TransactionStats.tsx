interface TransactionStatsProps {
  readonly totalTransactions: number;
  readonly filteredCount: number;
  readonly searchTerm: string;
}

function TransactionStats({ totalTransactions, filteredCount, searchTerm }: TransactionStatsProps) {
  if (filteredCount === 0) return null;

  return (
    <div className="bg-gray-50 px-6 py-3 border-t">
      <div className="text-sm text-gray-600">
        Showing {filteredCount} of {totalTransactions} transactions
        {searchTerm && ` for "${searchTerm}"`}
      </div>
    </div>
  );
}

export default TransactionStats;
