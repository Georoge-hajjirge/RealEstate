import React, { useEffect, useState } from 'react';
import { PropertyResponse } from '../types/propertyInterface';
import { getRequest } from '../services/endpoints';

const FavoriteProperties = () => {
  const [favoriteProperties, setFavoriteProperties] = useState<PropertyResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const user_id = localStorage.getItem('userId');

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user_id) {
        setError('User not found');
        setLoading(false);
        return;
      }

      try {
        const response = await getRequest<{ status: string, message: string, data: any[] }>(`/favorites/${user_id}`, {});
        console.log('response', response)
        if (response?.data) {
          setFavoriteProperties(response.data.map(fav => fav.property_id));
        } else {
          setError('No favorite properties found.');
        }
      } catch (error) {
        setError('Error fetching favorite properties.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [user_id]);


  if (loading) {
    return <div className="text-center">Loading favorite properties...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container ml-20 px-4 py-6">
      <h2 className="text-3xl font-bold mb-4">Favorite Properties</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {favoriteProperties.length > 0 ? (
          favoriteProperties.map((property) => (
            <div key={property._id} className=" w-2/6border border-gray-300 rounded-lg shadow-lg overflow-hidden">
              <div className="w-full h-64 overflow-hidden">
                <div className="w-full h-64 overflow-hidden">
                  {property.images.length > 0 ? (
                    <img
                      src={`/${property.images[0].url}`}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                      <span>No Image Available</span>
                    </div>
                  )}
                </div>

              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold">{property.title}</h3>
                <p className="text-gray-600">{property.city}, {property.state}</p>
                <p className="text-sm text-gray-500">{property.description}</p>
                <p className="text-lg font-bold text-green-500">${property.price}</p>
                <p className="text-sm text-gray-600">Bedrooms: {property.bedrooms}, Bathrooms: {property.bathrooms}</p>
              </div>
            </div>
          ))
        ) : (
          <div>No favorite properties found.</div>
        )}
      </div>
    </div>
  );
};

export default FavoriteProperties;

