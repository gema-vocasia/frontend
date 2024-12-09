import PropTypes from 'prop-types';
import StoryCard from '../molecules/StoryCard';

const StorySection = ({ image, title, description }) => {
  return (
    <section className="py-2 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-2xl font-bold text-center text-gray-800">{title}</h2>
        <div className="mt-8">
          <StoryCard
            image={image}
            title="Siapa Kami?"
            description={description}
            bgColor="bg-blue-900"
            textColor="text-white"
            isImageLeft={true}
          />
          <StoryCard
            image={image}
            title="Kenapa Memilih Kami?"
            description={description}
            bgColor="bg-gray-300"
            textColor="text-gray-800"
            isImageLeft={false}
          />
        </div>
      </div>
    </section>
  );
};

StorySection.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default StorySection;
