import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { getRequest } from "../../../services/endpoints";
import { PropertyResponse } from "../../../types/propertyInterface";
import { setFavorites } from "../../../features/favorites/favoritesSlice";
import DisplayFavoritePropertyCard from "../../molecules/DisplayFavoritePropertyCard/DisplayFavoritePropertyCard";
import { useLoader } from "../../../util/LoaderContext";

const DisplayFavoritePropertyList: React.FC = () => {
  const dispatch = useDispatch();
  const { showLoader, hideLoader } = useLoader();
  const favoriteProperties = useSelector((state: RootState) => state.favorites.favorites);
  const [error, setError] = useState<string | null>(null);
  const user_id = localStorage.getItem("userId");

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user_id) {
        setError("User not found");
        return;
      }

      showLoader();
      try {
        const response = await getRequest<{ status: string; message: string; data: PropertyResponse[] }>(
          `/favorites/${user_id}`,
          {}
        );

        if (response?.data && Array.isArray(response.data)) {
          dispatch(setFavorites(response.data));
        } else {
          setError("No favorite properties found.");
        }
      } catch (error) {
        console.error(error);
        setError("Error fetching favorite properties.");
      } finally {
        hideLoader();
      }
    };

    fetchFavorites();
  }, [user_id, dispatch]);

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
