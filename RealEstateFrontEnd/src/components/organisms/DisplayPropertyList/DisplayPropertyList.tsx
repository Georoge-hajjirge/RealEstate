import React, { useEffect } from "react";
import { PropertyResponse } from "../../../types/propertyInterface";
import { deleteRequest, getRequest, postRequest } from "../../../services/endpoints";
import { DisplayPropertyCard } from "../../molecules/DisplayPropertyCard";
import { useLoader } from "../../../util/LoaderContext";
import {
  setError,
  setProperties,
  toggleFavorite,
  selectProperties,
  selectPropertyError
} from "../../../features/Listproperty";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

const DisplayPropertyList: React.FC = () => {
  const dispatch = useAppDispatch();
  const properties = useAppSelector(selectProperties);
  const error = useAppSelector(selectPropertyError);
  const { showLoader, hideLoader } = useLoader();
  const user_id = localStorage.getItem("userId") || "";

  useEffect(() => {
    const fetchProperties = async () => {
      showLoader();
      try {
        const response = await getRequest<{ data: PropertyResponse[] }>("/properties", {});
        if (response?.data) {
          console.log('response',response.data)
          dispatch(setProperties(response.data));
        } else {
          dispatch(setError("No properties found."));
        }
      } catch (e) {
        dispatch(setError("Error fetching properties."));
      } finally {
        hideLoader();
      }
    };

    fetchProperties();
  }, [dispatch]);

  const handleWishlistToggle = async (property: PropertyResponse) => {
    if (!user_id) {
      alert("User not logged in!");
      return;
    }

    showLoader();
    try {
      if (property.isFavorite) {
        const response = await deleteRequest<{ status: string }>("/favorite", {
          user_id,
          property_id: property._id,
        });
        if (response.status === "Success") {
          dispatch(toggleFavorite(property._id));
        }
      } else {
        const response = await postRequest<{ status: string }>("/favorite", {
          user_id,
          property_id: property._id,
        });
        if (response.status === "Success") {
          dispatch(toggleFavorite(property._id));
        }
      }
    } catch (err) {
      console.error("Error toggling favorite:", err);
      alert("Failed to update favorite status.");
    } finally {
      hideLoader();
    }
  };

  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map(property => (
        <DisplayPropertyCard
          key={property._id}
          property={property}
          onWishlistToggle={() => handleWishlistToggle(property)}
        />
      ))}
    </div>
  );
};

export default DisplayPropertyList;
