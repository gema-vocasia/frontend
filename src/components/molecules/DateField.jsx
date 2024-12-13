import PropTypes from 'prop-types';
import Label from "../atoms/Label";
import Input from "../atoms/Input";

const DateField = ({ label, onChange }) => (
  <div>
    <Label>{label}</Label>
    <Input
      type="date"
      onChange={onChange}
    />
    {label === "Tanggal Berakhir" && (
      <p className="text-sm text-gray-500 mt-2">
        Minimal durasi kampanye 30 hari
      </p>
    )}
  </div>
);

DateField.propTypes = {
  label: PropTypes.string.isRequired, 
  onChange: PropTypes.func.isRequired, 
};

export default DateField;