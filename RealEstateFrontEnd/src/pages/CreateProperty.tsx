import React, { useState } from 'react';
import { PropertyFormData } from '../types/propertyInterface';
import { ApiResponse } from '../types/interfaces';
import { getRequest, postFormDataRequest } from '../services/endpoints';

const CreateProperty = () => {
  const [property, setProperty] = useState<PropertyFormData>({
    title: '',
    description: '',
    property_type: '',
    price: 0,
    address: '',
    city: '',
    state: '',
    zip_code: '',
    bedrooms: 0,
    bathrooms: 0,
    features: '',
    status: 'available',
    images: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) => ({
        file,
        altText: file.name, 
      }));
      console.log('files',filesArray);
      setProperty({ ...property, images: filesArray });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      Object.keys(property).forEach(key => {
        if (key !== 'images') {
          formData.append(key, (property as any)[key]);
        }
      });

      if (property.images && property.images.length > 0) {
        property.images.forEach((imageData: { file: File, altText: string }) => {
          formData.append('images', imageData.file);
        });
      }
  

      console.log('FormData contents:');
      formData.forEach((value, key) => {
          console.log(`${key}:`, value);
        });
        const response = await postFormDataRequest<ApiResponse>('/property', formData);
        console.log('response',response.data.status)
        if (response.data.status=== "available") {
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
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Create Property</h2>
      <form onSubmit={handleSubmit} className="space-y-6" >
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={property.title}
            onChange={handleChange}
            placeholder="Property Title"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            value={property.description}
            onChange={handleChange}
            placeholder="Property Description"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="property_type" className="block text-sm font-medium text-gray-700">Property Type</label>
          <input
            type="text"
            id="property_type"
            name="property_type"
            value={property.property_type}
            onChange={handleChange}
            placeholder="Property Type"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={property.price}
            onChange={handleChange}
            placeholder="Price"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={property.address}
            onChange={handleChange}
            placeholder="Address"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={property.city}
            onChange={handleChange}
            placeholder="City"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={property.state}
            onChange={handleChange}
            placeholder="State"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="zip_code" className="block text-sm font-medium text-gray-700">Zip Code</label>
          <input
            type="text"
            id="zip_code"
            name="zip_code"
            value={property.zip_code}
            onChange={handleChange}
            placeholder="Zip Code"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">Bedrooms</label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={property.bedrooms}
            onChange={handleChange}
            placeholder="Bedrooms"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700">Bathrooms</label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={property.bathrooms}
            onChange={handleChange}
            placeholder="Bathrooms"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="features" className="block text-sm font-medium text-gray-700">Features</label>
          <input
            type="text"
            id="features"
            name="features"
            value={property.features}
            onChange={handleChange}
            placeholder="Features"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
          <select
            id="status"
            name="status"
            value={property.status}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="available">Available</option>
            <option value="sold">Sold</option>
            <option value="under contract">Under Contract</option>
          </select>
        </div>

        <div>
          <label htmlFor="images" className="block text-sm font-medium text-gray-700">Images</label>
          <input
            type="file"
            name="images"
            onChange={handleImageChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Create Property
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProperty;
