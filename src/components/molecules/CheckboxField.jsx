import PropTypes from 'prop-types';
import Checkbox from '../atoms/Checkbox';

const CheckboxField = ({ id, checked, onChange, label }) => {
  return <Checkbox id={id} checked={checked} onChange={onChange} label={label} />;
};

CheckboxField.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default CheckboxField;
