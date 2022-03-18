
const SearchBar = ({ searchTerm, handleUserInput }) => {
  return (
   <input
    className="searchBar"
    type="search"
    data-testid="searchBar"
    placeholder="Search GIFs"
    value={searchTerm}
    onChange={handleUserInput}
   />
  );
}
export default SearchBar;