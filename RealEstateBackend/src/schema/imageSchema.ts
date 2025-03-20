import mongoose, { Schema, Document } from "mongoose";

interface Image extends Document {
  url: string;
  altText: string;
}

const imageSchema = new Schema<Image>({
  url: { type: String, required: true },
  altText: { type: String, required: true },
});

const ImageModel = mongoose.model<Image>("Image", imageSchema);

export default ImageModel;
