import React, { useEffect, useState } from "react";
import { PropertyResponse } from "../../../types/propertyInterface";
import { getRequest } from "../../../services/endpoints";
import DisplayFavoritePropertyCard from "../../molecules/DisplayFavoritePropertyCard/DisplayFavoritePropertyCard";

const DisplayFavoritePropertyList: React.FC = () => {
  const [favoriteProperties, setFavoriteProperties] = useState<PropertyResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const user_id = localStorage.getItem("userId");

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user_id) {
        setError("User not found");
        setLoading(false);
        return;
      }

      try {
        const response = await getRequest<{ status: string; message: string; data: PropertyResponse[] }>(
          `/favorites/${user_id}`,
          {}
        );

        if (response?.data && Array.isArray(response.data)) {
          setFavoriteProperties(response.data);
        } else {
          setError("No favorite properties found.");
        }
      } catch (error) {
        setError("Error fetching favorite properties.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [user_id]);

  if (loading) return <div className="text-center">Loading favorite properties...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {favoriteProperties.length > 0 ? (
        favoriteProperties.map((property) =>
          property && property._id ? <DisplayFavoritePropertyCard key={property._id} property={property} /> : null
        )
      ) : (
        <div>No favorite properties found.</div>
      )}
    </div>
  );
};

export default DisplayFavoritePropertyList;
