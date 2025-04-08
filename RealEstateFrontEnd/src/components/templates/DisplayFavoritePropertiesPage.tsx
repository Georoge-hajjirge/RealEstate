import React from "react";
import DisplayFavoritePropertyList from "../organisms/DisplayFavoritePropertyList/DisplayFavoritePropertyList";
import { DisplayLoader } from "../atoms/DisplayLoader";
import { useLoader } from "../../util/LoaderContext";

const DisplayFavoritePropertiesPage: React.FC = () => {
  const { isLoading } = useLoader();

  return (
    <div className="container ml-20 px-4 py-6">
      {isLoading && <DisplayLoader />}

      <h2 className="text-3xl font-bold mb-4">Favorite Properties</h2>
      <DisplayFavoritePropertyList />
    </div>
  );
};

export default DisplayFavoritePropertiesPage;
