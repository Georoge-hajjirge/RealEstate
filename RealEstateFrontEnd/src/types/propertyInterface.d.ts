export interface Image {
  file: File;
  altText: string; 
}

export interface PropertyFormData {
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
  images: any; 
}

export interface PropertyResponse {
  _id: string;
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
  images: {
    url: string;
    altText: string;
    _id: string;
  }[];
  isFavorite: boolean;
}

export interface Favorite{
  property_id: string;
  user_id: string,
}
