export enum Status {
  Active = 'active',
  InActive = 'inactive',
  Deleted = 'deleted',
}

  
  export interface Location {
    longitude: number;    
    latitude: number;      
    locationUrl: string;  
  }
  
  export interface Address{
    street: string; 
    city: string;
    state: string;
    zipcode: string;
    country: string;
  }
  
  export interface PropertyPicture{
    url:string;
    alternateName?:string;
  }