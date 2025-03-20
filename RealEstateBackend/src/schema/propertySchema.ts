import mongoose, { Schema, Document } from "mongoose";

interface Property extends Document {
  title: string;
  description: string;
  property_type: string;
  price: number;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  bedrooms: number;
  bathrooms: number;
  features: string;
  status: string;
  images: { url: string, altText: string }[];  
}

const propertySchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  property_type: { type: String, required: true },
  price: { type: Number, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip_code: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  features: { type: String, required: true },
  status: { type: String, required: true },
  images: [
    {
      url: { type: String, required: true },
      altText: { type: String, required: true },
    },
  ],
});

const PropertyModel = mongoose.model<Property>("Property", propertySchema);

export default PropertyModel;
