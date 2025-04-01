import { useState } from "react";
import { PropertyFormData } from "../../../types/propertyInterface";
import InputField from "../../atoms/InputField";
import Button from "../../atoms/Button";
import PropertyDetailsForm from "../../molecules/PropertyDetailsForm";
import PropertyAddressForm from "../../molecules/PropertyAddressForm";
import { getRequest, postFormDataRequest } from "../../../services/endpoints";
import { ApiResponse } from "../../../types/interfaces";

const CreatePropertyForm = () => {
  const [property, setProperty] = useState<PropertyFormData>({
    title: "",
    description: "",
    property_type: "",
    price: 0,
    address: { street: "", city: "", state: "", zipcode: "", country: "" },
    bedrooms: 0,
    bathrooms: 0,
    features: [],
    status: "active",
    images: [],
    isActive: true,
    location: { longitude: 0, latitude: 0, locationUrl: "" },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (["street", "city", "state", "zipcode", "country"].includes(name)) {
        setProperty((prev) => ({
          ...prev,
          address: {
            ...prev.address,
            [name]: value,
          },
        }));
      } else {
        setProperty((prev) => ({ ...prev, [name]: value }));
      }
    };
  
  const handleLocationChange = (
    field: keyof PropertyFormData["location"],
    value: string | number
  ) => {
    setProperty((prev) => ({
      ...prev,
      location: { ...prev.location, [field]: value },
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) => ({
        file,
        altText: "",
      }));
      setProperty((prev) => ({ ...prev, images: filesArray }));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      
      formData.append('title', property.title);
      formData.append('description', property.description);
      formData.append('property_type', property.property_type);
      formData.append('price', property.price.toString());
      formData.append('bedrooms', property.bedrooms.toString());
      formData.append('bathrooms', property.bathrooms.toString());
      formData.append('status', property.status);
      formData.append('isActive', JSON.stringify(property.isActive));
  
      formData.append('address', JSON.stringify(property.address));
    formData.append('location', JSON.stringify(property.location));
    formData.append('features', JSON.stringify(property.features));

  
      if (property.images.length > 0) {
        property.images.forEach((imageData, index) => {
          formData.append('images', imageData.file);
          console.log("imageData.file) : ",imageData.file);
          if (imageData.altText) {
            formData.append(`imagesAltText[${index}]`, imageData.altText);
          }
        });
      }
  
      const response = await postFormDataRequest<ApiResponse>('/property', formData);
      
      if (response.data) {
        alert('Property created successfully!');
        const propertiesResponse = await getRequest<ApiResponse>('/properties', {});
        console.log('Properties fetched:', propertiesResponse);
      } else {
        alert('Failed to create property.');
        console.error('API response error:', response);
      }
    } catch (error) {
      console.error('Error creating property:', error);
      alert('Error creating property');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-lg space-y-4">
      
      <PropertyDetailsForm property={property} onChange={handleInputChange} setProperty={setProperty} />

      <legend className="font-semibold">Address</legend>
      <PropertyAddressForm address={property.address} onChange={handleInputChange} />

      <legend className="font-semibold">Location</legend>
      <InputField
        label="Longitude"
        name="longitude"
        type="number"
        value={property.location.longitude.toString()}
        onChange={(e) => handleLocationChange("longitude", parseFloat(e.target.value))}
      />
      <InputField
        label="Latitude"
        name="latitude"
        type="number"
        value={property.location.latitude.toString()}
        onChange={(e) => handleLocationChange("latitude", parseFloat(e.target.value))}
      />
      <InputField
        label="Location URL"
        name="locationUrl"
        type="text"
        value={property.location.locationUrl}
        onChange={(e) => handleLocationChange("locationUrl", e.target.value)}
      />

      <legend className="font-semibold">Property Images</legend>
      <input type="file" multiple onChange={handleImageChange} className="border rounded p-2 w-full" />

      <Button type="submit" text="Create Property" />
    </form>
  );
};

export default CreatePropertyForm;
