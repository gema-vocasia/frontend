import PropTypes from 'prop-types';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

const FormField = ({ label, type, name, value, placeholder, onChange, disabled }) => {
  return (
    <div>
      <Label>{label}</Label>
      <Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default FormField;
