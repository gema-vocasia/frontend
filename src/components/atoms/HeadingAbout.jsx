import React from 'react';
import PropTypes from 'prop-types';

const HeadingAbout = ({ level, children, className }) => {
  const Tag = level >= 1 && level <= 6 ? `h${level}` : 'h2'; // Default ke <h2> jika level tidak valid

  return <Tag className={className}>{children}</Tag>;
};

HeadingAbout.propTypes = {
  level: PropTypes.number, // Level heading (1-6)
  children: PropTypes.node.isRequired, // Konten heading
  className: PropTypes.string, // Kelas CSS opsional
};

HeadingAbout.defaultProps = {
  level: 2, // Default heading level
  className: '', // Default tanpa kelas tambahan
};

export default HeadingAbout;
