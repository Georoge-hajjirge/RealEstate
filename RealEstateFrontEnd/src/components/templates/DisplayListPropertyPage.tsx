import React from "react";
import DisplayPropertyList from "../organisms/DisplayPropertyList/DisplayPropertyList";

const DisplayListPropertyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-4">Available Properties</h2>
      <DisplayPropertyList />
    </div>
  );
};

export default DisplayListPropertyPage;
