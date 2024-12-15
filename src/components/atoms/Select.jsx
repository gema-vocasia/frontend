import PropTypes from 'prop-types';

const Select = ({ kategori, selectedCategory, setSelectedCategory }) => (
  <select
    id="category"
    value={selectedCategory || ""}
    onChange={(e) => setSelectedCategory(e.target.value)}
    required
    style={{
      width: '100%',
      padding: '14px',
      borderRadius: '8px',
      border: '2px solid #5E84C5',
      fontSize: '16px',
      outline: 'none',
      marginTop: '5px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    }}
  >
    <option value="" disabled>
      -- Pilih Kategori --
    </option>
    {kategori.map((category) => (
      <option key={category._id} value={category._id}>
        {category.title}
      </option>
    ))}
  </select>
);

Select.propTypes = {
  kategori: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func.isRequired,
};

Select.defaultProps = {
  selectedCategory: "", 
};

export default Select;
