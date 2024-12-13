import PropTypes from 'prop-types';

const Select = ({ kategori, setKategori, options }) => (
  <select
    value={kategori}
    onChange={(e) => setKategori(e.target.value)}
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
      Pilih Kategori
    </option>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

Select.propTypes = {
  kategori: PropTypes.string.isRequired,
  setKategori: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Select;