import PropTypes from 'prop-types';
import { ArrowRightStartOnRectangleIcon, UserPlusIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const ButtonIcon = ({ icon, text, to }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(to)}
      className="flex items-center rounded-lg bg-[#5E84C5] px-4 py-2 text-white hover:bg-[#476BA6] shadow-xl"
    >
      {icon}
      {text}
    </button>
  );
};

ButtonIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export const LoginButton = () => (
  <ButtonIcon icon={<ArrowRightStartOnRectangleIcon className="mr-2 h-5 w-5" />} text="Masuk" to="/login" />
);

export const RegisterButton = () => (
  <ButtonIcon icon={<UserPlusIcon className="mr-2 h-5 w-5" />} text="Daftar" to="/register" />
);

export default ButtonIcon;