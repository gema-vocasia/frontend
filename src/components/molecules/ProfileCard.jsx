import PropTypes from 'prop-types';
import Icon from "../atoms/Icon";

const ProfileCard = ({ icon, text }) => {
  return (
    <Icon>
      {icon}
      <span className="text-gray-800 text-lg">{text}</span>
    </Icon>
  );
};

ProfileCard.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired 
};

export default ProfileCard;