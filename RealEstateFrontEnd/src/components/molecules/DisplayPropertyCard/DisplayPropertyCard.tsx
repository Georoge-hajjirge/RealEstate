import React from "react";
import { PropertyResponse } from "../../../types/propertyInterface";
import { PropertyImage } from "../../atoms/PropertyImage";
import { WishlistIcon } from "../../atoms/WishlistIcon";
import { DisplayPropertyDetails } from "../DisplayPropertyDetails";

interface DisplayPropertyCardProps {
  property: PropertyResponse;
  onWishlistToggle: () => void;
}

const DisplayPropertyCard: React.FC<DisplayPropertyCardProps> = ({ property, onWishlistToggle }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
<PropertyImage
  imageUrl={property.propertyPictures?.[0]?.url || property.title}
  title={property.title}
/>      <div className="p-4">
        <DisplayPropertyDetails property={property} />
        <div className="flex items-center mt-4">
          <WishlistIcon isFavorite={property.isFavorite} onClick={onWishlistToggle} />
          <span className={`ml-2 ${property.isFavorite ? "text-red-500" : "text-gray-600"}`}>
            {property.isFavorite ? "Remove from Wishlist" : "Add to Wishlist"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DisplayPropertyCard;
