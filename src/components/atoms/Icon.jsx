import PropTypes from 'prop-types';

const Icon = ({ children, className = '' }) => {
  return (
    <div className={`p-4 rounded-lg border-2 border-[#5E84C5] flex items-center ${className}`}>
      {children}
    </div>
  );
};

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string 
};

export default Icon;

