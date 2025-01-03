import PropTypes from "prop-types";
import HeroTitle from "../atoms/HeroTitle";
import HeroSubtitle from "../atoms/HeroSubtitle";
import SearchBar from "../molecules/SearchBar";

const Hero = ({
  title,
  subtitle,
  subtitleUnderSearch,
  searchQuery,
  setSearchQuery,
  clearSearch,
  image,
  showSearch,
}) => {
  return (
    <div className="relative mt-0 mb-12">
      <div className="w-screen h-[430px] overflow-hidden">
        <img
          src={image}
          alt="hero"
          className="object-cover w-screen h-full transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
        <HeroTitle title={title} />
        <HeroSubtitle subtitle={subtitle} />
        {showSearch && (
          <div data-aos="fade-down" data-aos-duration="1000" className="w-full">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              clearSearch={clearSearch}
            />
            {subtitleUnderSearch && (
              <p className="mt-4 text-sm text-gray-300">
                {subtitleUnderSearch}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  subtitleUnderSearch: PropTypes.string,
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
  clearSearch: PropTypes.func,
  image: PropTypes.string.isRequired,
  showSearch: PropTypes.bool.isRequired,
};

export default Hero;

