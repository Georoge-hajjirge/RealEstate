import React from "react";
import InputField from "../../atoms/InputField";
import TextareaField from "../../atoms/TextareaField";

interface PropertyDetailsFormProps {
  property: { title: string; description: string; property_type: string; price: number; features: string[] };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setProperty: React.Dispatch<React.SetStateAction<any>>;
}

const PropertyDetailsForm: React.FC<PropertyDetailsFormProps> = ({ property, onChange, setProperty }) => {
  return (
    <div>
      <InputField label="Title" type="text" name="title" value={property.title} onChange={onChange} />
      <TextareaField label="Description" name="description" value={property.description} onChange={onChange} />
      <InputField label="Property Type" type="text" name="property_type" value={property.property_type} onChange={onChange} />
      <InputField label="Price" type="number" name="price" value={property.price.toString()} onChange={onChange} />
      
      <InputField
        label="Features"
        type="text"
        name="features"
        value={property.features.join(", ")}
        onChange={(e) => {
          const featuresArray = e.target.value.split(",").map((item) => item.trim());
          setProperty((prev: any) => ({ ...prev, features: featuresArray }));
        }}
      />
    </div>
  );
};

export default PropertyDetailsForm;
