import { Request } from "express";

export interface UserPayload{
    firstName:string,
    lastName:string,
    email:string,
    passwordHash:string
}


export interface RequestWithUser extends Request {
    user?: UserPayload;
  }