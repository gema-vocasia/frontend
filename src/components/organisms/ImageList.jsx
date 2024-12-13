import React from 'react';
import ImageCard from '../molecules/ImageCardLicense';

const ImageList = ({ images, onImageClick }) => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    {images.map((image) => (
      <ImageCard key={image.id} image={image} onClick={() => onImageClick(image)} />
    ))}
  </div>
);

export default ImageList;
