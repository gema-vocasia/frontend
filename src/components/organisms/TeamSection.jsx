import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../atoms/HeadingAbout';
import TeamCard from '../molecules/TeamCard';

const TeamSection = ({ team }) => (
  <section className="w-full py-16 bg-gray-50">
    <div className="max-w-[1200px] mx-auto px-4 text-center">
      <Heading level={2} className="mb-8 text-3xl font-bold text-gray-800">
        Tim Gema Foundation
      </Heading>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {team.map((member) => (
          <TeamCard
            key={member.id} 
            name={member.name}
            position={member.position} 
            imageSrc={member.image} 
          />
        ))}
      </div>
    </div>
  </section>
);

TeamSection.propTypes = {
  team: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TeamSection;
