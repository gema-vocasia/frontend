import PropTypes from "prop-types";
import IconSearch from "../atoms/IconSearch";
import IconClear from "../atoms/IconClear";
import InputField from "../atoms/InputField";

const SearchBar = ({ searchQuery, setSearchQuery, clearSearch }) => {
  return (
    <div className="relative mt-4 w-full">
      <IconSearch />
      <InputField
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="transition-all duration-300 focus:w-[150%] focus:ring-2 focus:ring-blue-500 w-full"
      />
      {searchQuery && <IconClear onClick={clearSearch} />}
    </div>
  );
};

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
};

export default SearchBar;
