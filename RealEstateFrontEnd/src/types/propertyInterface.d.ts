interface PropertyPictures{
  url:string;
  alternateName:string;
}
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
  propertyPictures: PropertyPictures[];
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
  propertyPictures: PropertyPictures[];
  isFavorite: boolean;
}



