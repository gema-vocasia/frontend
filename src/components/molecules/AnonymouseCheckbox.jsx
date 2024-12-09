import PropTypes from 'prop-types';
import Checkbox from '../atoms/Checkbox';

const AnonymousCheckbox = ({ checked, onChange }) => {
  return (
    <Checkbox
      id="anonymous"
      checked={checked}
      onChange={onChange}
      label="Sembunyikan nama saya (Anonymous)"
    />
  );
};

AnonymousCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AnonymousCheckbox;
