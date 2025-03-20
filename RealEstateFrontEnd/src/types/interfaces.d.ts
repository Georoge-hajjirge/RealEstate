export interface RegistrationFormData{
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    confirmPassword:string;
    role:string;
    phoneNumber:number;
    image:FileList
}

export interface LoginFormData{
    email:string;
    password:string;
}
export interface ApiResponse {
    success: boolean;
    message: string;
    data?: any;
    statusCode?: number;
  }

export interface ProfileFormData{
    data(data: any): unknown;
    firstName:string;
    lastName:string;
    email:string;
    role:string;
    phoneNumber:number;
    image:FileList |null;
}

interface ProfileResponse {
    data: {
      _id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber?: string;
      role?: string;
      profilePicture?: string;
    };
    message: string;
    status: string;
  }