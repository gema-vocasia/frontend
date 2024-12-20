import PropTypes from "prop-types";
import StoryCard from "../molecules/StoryCard";

const StorySection = ({ image, title }) => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2
          className="mb-12 text-4xl font-extrabold text-center text-gray-800 uppercase tracking-wide"
          data-aos="zoom-in"
        >
          {title}
        </h2>
        <div className="mt-8 space-y-12">
          <StoryCard
            image={image}
            title="Siapa Kami?"
            description="Kami di sini untuk membantu mereka yang kehilangan harapan. Dengan sedikit kebaikanmu hari ini, senyum mereka akan bertahan selamanya. Bergabunglah dalam misi kami untuk menciptakan dunia yang lebih baik!"
            bgColor="bg-blue-900"
            textColor="text-white"
            isImageLeft={true}
            aos="fade-right"
          />
          <StoryCard
            image={image}
            title="Kenapa Memilih Kami?"
            description="Kami memastikan donasi Anda digunakan dengan transparan, aman, dan tepat sasaran. Setiap kontribusi memberikan dampak positif yang nyata bagi masyarakat yang membutuhkan, dengan laporan yang jelas dan sistem yang mudah diakses untuk memastikan kepercayaan Anda."
            bgColor="bg-gray-700"
            textColor="text-white"
            isImageLeft={false}
            aos="fade-left"
          />
        </div>
      </div>
    </section>
  );
};

StorySection.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default StorySection;
