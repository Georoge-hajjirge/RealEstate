import React from 'react';
import { PropertyResponse } from '../../../types/propertyInterface';

interface PropertyDetailsProps {
  property: PropertyResponse;
}

const DisplayPropertyDetails: React.FC<PropertyDetailsProps> = ({ property }) => {
  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold">{property.title}</h3>
      <p className="text-sm text-gray-500">{property.description}</p>
      <p className="text-lg font-bold text-green-500">${property.price}</p>
      <p className="text-sm text-gray-600">Bedrooms: {property.bedrooms}, Bathrooms: {property.bathrooms}</p>
      <p className="text-sm text-gray-600">Features: {property.features}</p>
      <p className="text-sm text-gray-600">Status: {property.status}</p>
    </div>
  );
};

export default DisplayPropertyDetails;
