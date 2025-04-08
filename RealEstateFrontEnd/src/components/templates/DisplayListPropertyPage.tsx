import React from "react";
import DisplayPropertyList from "../organisms/DisplayPropertyList/DisplayPropertyList";
import { useLoader } from "../../util/LoaderContext";
import { DisplayLoader } from "../atoms/DisplayLoader";

const DisplayListPropertyPage: React.FC = () => {
  const { isLoading } = useLoader();

  return (
    <div className="container mx-auto px-4 py-6">
            {isLoading && <DisplayLoader />}

      <h2 className="text-3xl font-bold mb-4">Available Properties</h2>
      <DisplayPropertyList />
    </div>
  );
};

export default DisplayListPropertyPage;
