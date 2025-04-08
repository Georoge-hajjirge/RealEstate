import React from "react";
import CreatePropertyForm from "../organisms/CreatePropertyForm";
import { useLoader } from "../../util/LoaderContext";
import { DisplayLoader } from "../atoms/DisplayLoader";

const CreatePropertyPage: React.FC = () => {
  const { isLoading } = useLoader();
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-md">
       {isLoading && <DisplayLoader />} 
      <h2 className="text-2xl font-semibold text-center mb-6">Create Property</h2>
      <CreatePropertyForm />
    </div>
  );
};

export default CreatePropertyPage;
