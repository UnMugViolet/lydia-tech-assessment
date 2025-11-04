import { Transaction } from '../types/Transaction';

interface TransactionRowProps {
  readonly transaction: Transaction;
}

function formatDateFromUnix(date: number): string {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(date * 1000).toLocaleDateString(undefined, options);
}

function getStatusBadge(status: string): string {
  const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
  switch(status) {
    case 'completed': return `${baseClasses} bg-green-100 text-green-800`;
    case 'pending': return `${baseClasses} bg-yellow-100 text-yellow-800`;
    case 'canceled': return `${baseClasses} bg-red-100 text-red-800`;
    default: return `${baseClasses} bg-gray-100 text-gray-800`;
  }
}

function TransactionRow({ transaction }: TransactionRowProps) {
  return (
    <div className="px-6 py-4 hover:bg-gray-50 transition-colors">
      <div className="grid grid-cols-8 md:grid-cols-12 gap-4 items-center">
        {/* Transaction Label */}
        <div className="col-span-4 md:col-span-3">
          <div className="font-medium text-gray-900">{transaction.label}</div>
          <div className="text-xs text-gray-500 mt-1 max-w-[70%] truncate">
            ID: {transaction.paymentId}
          </div>
          {transaction.statusErrorDisplay && (
            <div className="text-xs text-red-600 mt-1 italic">
              {transaction.statusErrorDisplay}
            </div>
          )}
        </div>

        {/* From */}
        <div className="hidden md:block md:col-span-2">
          <div className="text-sm text-gray-900">
            {transaction.firstname} {transaction.lastname}
          </div>
          <div className="text-xs text-gray-500">Member: {transaction.memberId}</div>
        </div>

        {/* To */}
        <div className="hidden md:block md:col-span-2">
          <div className="text-sm text-gray-900 truncate">
            {transaction.receiverFirstname || 'N/A'}
            {transaction.receiverLastname && ` ${transaction.receiverLastname}`}
          </div>
        </div>

        {/* Amount */}
        <div className="col-span-2 md:col-span-1">
          <div className="font-semibold text-gray-900">{transaction.amount}</div>
        </div>

        {/* Date */}
        <div className="hidden md:block md:col-span-2">
          <div className="text-sm text-gray-600">
            {formatDateFromUnix(transaction.date)}
          </div>
        </div>

        {/* Status */}
        <div className="col-span-2 md:col-span-1">
          <span className={getStatusBadge(transaction.status)}>
            {transaction.status}
          </span>
        </div>

        {/* Type */}
        <div className="hidden md:block md:col-span-1">
          <div className="text-xs text-gray-500">
            {transaction.transactionType.replace('_', ' ')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionRow;
