import React, { useEffect, useState } from "react";
import { PropertyResponse } from "../../../types/propertyInterface";
import { deleteRequest, getRequest, postRequest } from "../../../services/endpoints";
import { DisplayPropertyCard } from "../../molecules/DisplayPropertyCard";

const DisplayPropertyList: React.FC = () => {
  const [properties, setProperties] = useState<PropertyResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const user_id = localStorage.getItem("userId") || "";

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await getRequest<{ status: string; message: string; data: PropertyResponse[] }>("/properties", {});
        if (response?.data) {
          setProperties(response.data);
        } else {
          setError("No properties found.");
        }
      } catch (error) {
        setError("Error fetching properties.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const toggleWishlist = async (property: PropertyResponse) => {
    if (!user_id) {
      alert("User not logged in!");
      return;
    }

    try {
      if (property.isFavorite) {
        const response = await deleteRequest<{ status: string }>("/favorite", { user_id, property_id: property._id });
        if (response.status === "Success") {
          setProperties(prevProperties =>
            prevProperties.map(item => (item._id === property._id ? { ...item, isFavorite: false } : item))
          );
        }
      } else {
        const response = await postRequest<{ status: string }>("/favorite", { user_id, property_id: property._id });
        if (response.status === "Success") {
          setProperties(prevProperties =>
            prevProperties.map(item => (item._id === property._id ? { ...item, isFavorite: true } : item))
          );
        }
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
      alert("Failed to update favorite status.");
    }
  };

  if (loading) return <div className="text-center">Loading properties...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map(property => (
        <DisplayPropertyCard key={property._id} property={property} onWishlistToggle={() => toggleWishlist(property)} />
      ))}
    </div>
  );
};

export default DisplayPropertyList;
