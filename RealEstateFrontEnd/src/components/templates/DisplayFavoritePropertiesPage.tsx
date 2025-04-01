import React from "react";
import DisplayFavoritePropertyList from "../organisms/DisplayFavoritePropertyList/DisplayFavoritePropertyList";

const DisplayFavoritePropertiesPage: React.FC = () => {
  return (
    <div className="container ml-20 px-4 py-6">
      <h2 className="text-3xl font-bold mb-4">Favorite Properties</h2>
      <DisplayFavoritePropertyList />
    </div>
  );
};

export default DisplayFavoritePropertiesPage;
