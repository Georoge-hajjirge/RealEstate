import React from "react";
import { PropertyResponse } from "../../../types/propertyInterface";

import { PropertyImage } from "../../atoms/PropertyImage";
import { DisplayPropertyDetails } from "../DisplayPropertyDetails";

interface DisplayFavoritePropertyCardProps {
  property: PropertyResponse;
}

const DisplayFavoritePropertyCard: React.FC<DisplayFavoritePropertyCardProps> = ({ property }) => {
  return (
    <div className="w-2/3 border border-gray-300 rounded-lg shadow-lg overflow-hidden">
 <PropertyImage
  imageUrl={property.propertyPictures?.[0]?.url || property.title}
  title={property.title}
  
/>      <DisplayPropertyDetails property={property} />
    </div>
  );
};

export default DisplayFavoritePropertyCard;
