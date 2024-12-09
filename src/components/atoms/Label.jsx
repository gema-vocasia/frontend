import PropTypes from 'prop-types';

const Label = ({ children }) => (
  <label className="block text-black mb-1">{children}</label>
);

Label.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default Label;