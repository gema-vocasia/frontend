import PropTypes from 'prop-types';

const Select = ({ options, onChange }) => (
  <select
    onChange={onChange}
    className="w-full p-3 rounded-lg text-black border-2 border-[#5E84C5] focus:outline-none focus:ring focus:ring-blue-200"
  >
    {options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,  
      label: PropTypes.string.isRequired,  
    })
  ).isRequired, 
  onChange: PropTypes.func.isRequired, 
};

export default Select;