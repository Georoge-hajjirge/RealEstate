import mongoose, { Schema, Document } from "mongoose";
import { Address, PropertyPicture, Status } from "./interface";

interface Property extends Document {
  title: string;
  description: string;
  property_type: string;
  price: number;
  address: Address;  
  location: Location;
  bedrooms: number;
  bathrooms: number;
  features: string[];
  status: Status;
  propertyPictures: PropertyPicture;
  version: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy?: mongoose.Schema.Types.ObjectId;
  updatedBy?: mongoose.Schema.Types.ObjectId;
  isActive: boolean;
}

const propertySchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    property_type: { type: String, required: true },
    price: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    features: { type: [String], required: true },
    status: { type: String, enum: Object.values(Status), default: Status.Active },

    propertyPictures: [
      {
        url: { type: String, required: true },
        alternateName: { type: String, default:null },
      },
    ],
    address: { 
      street: { type: String, required: true },  
      city: { type: String, required: true },
      state: { type: String, required: true },
      zipcode: { type: String, required: true },
      country: { type: String, required: true },
    }, 
    location: { 
      longitude: { type: Number, required: true },
      latitude: { type: Number, required: true },
      locationUrl: { type: String, required: true },
    },
    version: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const PropertyModel = mongoose.model<Property>("Property", propertySchema);

export default PropertyModel;
