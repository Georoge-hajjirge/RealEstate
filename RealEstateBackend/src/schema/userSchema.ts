import mongoose, { Document, Schema } from "mongoose";
import { Status } from "./interface";

export enum UserRole {
  Admin = 'admin',
  Buyer = 'buyer',
  Seller = 'seller',
}

interface ProfilePicture {
  map(arg0: (pic: { url: any; alternateName: any; }) => { url: any; alternateName: any }): unknown;
  url: string;
  alternateName?: string;
}

interface User extends Document {
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  phoneNumber: number;
  role: UserRole[];
  profilePictures: ProfilePicture;
  favoriteProducts: mongoose.Types.ObjectId[];
  status: Status;
  version: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy?: mongoose.Schema.Types.ObjectId;
  updatedBy?: mongoose.Schema.Types.ObjectId;
  isActive: boolean;
}

const userSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    role: [
      {
        type: String,
        enum: [UserRole.Admin, UserRole.Buyer, UserRole.Seller],
        default: UserRole.Buyer,
      },
    ],
    profilePictures: {
      url: { type: String, required: true },
      alternateName: { type: String, default: null }
    },
    favoriteProducts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property',
      },
    ],
    status: { type: String, enum: Object.values(Status), default: Status.Active },
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

const UserModel = mongoose.model<User>('User', userSchema);

export default UserModel;
