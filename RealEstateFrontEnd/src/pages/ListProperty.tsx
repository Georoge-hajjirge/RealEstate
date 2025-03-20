import React, { useEffect, useState } from 'react';
import { PropertyResponse } from '../types/propertyInterface';
import { getRequest, postRequest, deleteRequest } from '../services/endpoints';
import { Heart } from 'react-feather'; // Heart icon from react-feather

const ListProperty = () => {
  const [properties, setProperties] = useState<PropertyResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const user_id = localStorage.getItem('userId');  

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await getRequest<{ status: string, message: string, data: PropertyResponse[] }>('/properties', {});
        if (response?.data) {
          setProperties(response.data);
        } else {
          setError('No properties found.');
        }
      } catch (error) {
        setError('Error fetching properties.');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const addToFavorites = async (user_id: string, property: PropertyResponse) => {
    try {
      const response = await postRequest<{ status: string }>('/favorite', { user_id, property_id: property._id });
      if (response.status === 'Success') {
        alert('Property added to favorites!');

        setProperties(prevProperties =>
          prevProperties.map(item =>
            item._id === property._id ? { ...item, isFavorite: true } : item
          )
        );
      } else {
        alert('Error adding property to favorites.');
      }
    } catch (error) {
      console.error('Error adding to favorites:', error);
      alert('Failed to add property to favorites.');
    }
  };

  const removeFromFavorites = async (user_id: string, property: PropertyResponse) => {
    try {
      const response = await deleteRequest<{ status: string }>('/favorite', { user_id, property_id: property._id });
      if (response.status === 'Success') {
        alert('Property removed from favorites!');

        setProperties(prevProperties =>
          prevProperties.map(item =>
            item._id === property._id ? { ...item, isFavorite: false } : item
          )
        );
      } else {
        alert('Error removing property from favorites.');
      }
    } catch (error) {
      console.error('Error removing from favorites:', error);
      alert('Failed to remove property from favorites.');
    }
  };

  if (loading) {
    return <div className="text-center">Loading properties...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container ml-20 px-4 py-6">
      <h2 className="text-3xl font-bold mb-4">Available Properties</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property._id} className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-64 overflow-hidden">
              {property.images.length > 0 ? (
                <img
                  src={`/${property.images[0].url}`} // Use the 'url' of the first image
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span>No Image Available</span>
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold">{property.title}</h3>
              <p className="text-gray-600">{property.city}, {property.state}</p>
              <p className="text-sm text-gray-500">{property.description}</p>
              <p className="text-lg font-bold text-green-500">${property.price}</p>
              <p className="text-sm text-gray-600">Bedrooms: {property.bedrooms}, Bathrooms: {property.bathrooms}</p>
              <p className="text-sm text-gray-600">Features: {property.features}</p>
              <p className="text-sm text-gray-600">Status: {property.status}</p>

              <div className="flex items-center mt-4">
                <Heart
                  onClick={() => {
                    if (property.isFavorite) {
                      removeFromFavorites(user_id!, property);
                    } else {
                      addToFavorites(user_id!, property);
                    }
                  }}
                  className={`cursor-pointer ${property.isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'} w-6 h-6`}
                />
                <span className={`ml-2 ${property.isFavorite ? 'text-red-500' : 'text-gray-600'}`}>
                  {property.isFavorite ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProperty;
