
export interface PropertyFormData {
  title: string;
  description: string;
  property_type: string;
  price: number;
  address: { 
    street: string;
    city: string;
    state: string;
    zipcode: string;
    country: string;
  };
  bedrooms: number;
  bathrooms: number;
  features: string[];
  status: string;
  images: { file: File; altText: string }[];
  isActive: boolean;
  location: {
    longitude: number;
    latitude: number;
    locationUrl: string;
  };
}


export interface PropertyResponse {
  _id: string;
  title: string;
  description: string;
  property_type: string;
  price: number;
  address: { 
    street: string;
    city: string;
    state: string;
    zipcode: string;
    country: string;
  };
  bedrooms: number;
  bathrooms: number;
  features: string[];
  status: string;
  images: {
    url: string;
    altText: string;
    _id: string;
  }[];
  isFavorite: boolean;
}



