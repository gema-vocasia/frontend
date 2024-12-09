import PropTypes from 'prop-types';
import IconSearch from '../atoms/IconSearch';
import IconClear from '../atoms/IconClear';
import InputField from '../atoms/InputField';

const SearchBar = ({ searchQuery, setSearchQuery, clearSearch }) => {
  return (
    <div className="relative w-1/3 mt-4">
      <IconSearch />
      <InputField value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
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