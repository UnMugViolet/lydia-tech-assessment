interface SearchInputProps {
  readonly searchTerm: string;
  readonly onSearchChange: (value: string) => void;
}

/* 
 * Using input field that on state change calls onSearchChange prop function to update search term
 * in parent component this component is a dumb component that just handles input and passes value up to parent
 */
function SearchInput({ searchTerm, onSearchChange }: SearchInputProps) {
  return (
    <div className="w-full md:w-80">
      <input 
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
      />
    </div>
  );
}

export default SearchInput;
