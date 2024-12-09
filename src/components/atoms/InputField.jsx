import PropTypes from 'prop-types';

const InputField = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Cari..."
      className="w-full pl-10 pr-6 py-3 text-black bg-white rounded-full border-2 border-[#2088CE] focus:outline-none focus:ring-2 focus:ring-[#2088CE] transition duration-300 ease-in-out hover:bg-[#f1f1f1]"
      value={value}
      onChange={onChange}
    />
  );
};

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;