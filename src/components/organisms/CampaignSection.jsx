import PropTypes from "prop-types";
import CampaignSectionContent from "../molecules/CampaignSectionContent";

const CampaignSection = ({ title, cards }) => {
  return (
    <section className="my-5" data-aos="fade-up" data-aos-duration="1000">
      <div className="container px-4 mx-auto">
        <CampaignSectionContent title={title} cards={cards} />
      </div>
    </section>
  );
};

CampaignSection.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CampaignSection;
