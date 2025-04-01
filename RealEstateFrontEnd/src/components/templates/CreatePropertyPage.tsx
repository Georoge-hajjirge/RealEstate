import React from "react";
import CreatePropertyForm from "../organisms/CreatePropertyForm";

const CreatePropertyPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Create Property</h2>
      <CreatePropertyForm />
    </div>
  );
};

export default CreatePropertyPage;
