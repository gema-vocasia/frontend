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
  </div>
);

DateField.propTypes = {
  label: PropTypes.string.isRequired, 
  onChange: PropTypes.func.isRequired, 
};

export default DateField;