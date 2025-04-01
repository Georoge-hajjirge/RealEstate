import React from 'react';

interface PropertyImageProps {
  imageUrl: string;
  title: string;
}

const PropertyImage: React.FC<PropertyImageProps> = ({ imageUrl, title }) => {
  return (
    <div className="w-full h-64 overflow-hidden">
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <span>No Image Available</span>
        </div>
      )}
    </div>
  );
};

export default PropertyImage;
