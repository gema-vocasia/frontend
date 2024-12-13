// Import dependensi yang diperlukan
import PropTypes from "prop-types";
import ImageCard from "../atoms/ImageCard";
import TextCard from "../atoms/TextCard";

const StoryCard = ({
  image,
  title,
  description,
  bgColor,
  textColor,
  isImageLeft,
  aos,
  duration,
  delay,
}) => {
  return (
    <div
      className={`grid grid-cols-1 gap-8 mt-8 md:grid-cols-2`}
      data-aos={aos}
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {isImageLeft && <ImageCard src={image} alt="Cerita" />}
      <TextCard
        title={title}
        description={description}
        bgColor={bgColor}
        textColor={textColor}
      />
      {!isImageLeft && <ImageCard src={image} alt="Cerita" />}
    </div>
  );
};

StoryCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  isImageLeft: PropTypes.bool.isRequired,
  aos: PropTypes.string,
  duration: PropTypes.number,
  delay: PropTypes.number,
};

StoryCard.defaultProps = {
  bgColor: "bg-white",
  textColor: "text-black",
  aos: "fade-up",
  duration: 1000,
  delay: 0,
};

export default StoryCard;
