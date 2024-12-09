import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MenuLink = ({ to, name, current }) => (
  <Link
    to={to}
    aria-current={current ? 'page' : undefined}
    className={`${
      current ? 'text-[#5E84C5]' : 'text-black hover:text-[#5E84C5]'
    } rounded-md px-3 py-2 text-base font-medium`}
  >
    {name}
  </Link>
);

MenuLink.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  current: PropTypes.bool,
};

export default MenuLink;