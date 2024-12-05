import PropTypes from "prop-types";

const Hero = ({ imageSrc, title }) => {
  return (
    <div className="relative h-96">
      <img
        src={imageSrc}
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <h1 className="text-white text-5xl font-bold whitespace-pre-line">{title}</h1>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  imageSrc: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
};

export default Hero;
