import { useState } from 'react'
import jsonData from './data/transactions.json';
import { Transaction } from './types/Transaction';
import { useTransactionFilter } from './hooks/useTransactionFilter';
import TransactionTable from './components/TransactionTable';
import SearchInput from './components/SearchInput';

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [transactions] = useState<Transaction[]>(jsonData as Transaction[]);
  const filteredTransactions = useTransactionFilter(transactions, searchTerm);

  if (!transactions || transactions.length === 0) {
    console.error("No transactions found, check your data source.");
    return (
      <div className="text-center text-3xl w-full h-full flex items-center justify-center">
        No transactions available...
      </div>
    );
  }

  return (
    <section className="w-full min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border p-6 md:p-8 mb-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
              <p className="text-gray-600 mt-1">Here is the list of your recent transactions</p>
            </div>
            <SearchInput 
              searchTerm={searchTerm} 
              onSearchChange={setSearchTerm} 
            />
          </div>
        </div>

        {/* Transactions Table */}
        <TransactionTable 
          transactions={filteredTransactions}
          searchTerm={searchTerm}
          totalTransactions={transactions.length}
        />
      </div>
    </section>
  )
}

export default App
