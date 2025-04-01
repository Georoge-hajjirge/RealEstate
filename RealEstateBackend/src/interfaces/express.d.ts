import { UserPayload} from "./userInterface";
import { Request } from "express";

export interface JwtPayload {
    userId: string;
  }
declare global{
    namespace Express{
        interface Request{
            user?:UserPayload;
            userId: string;
        }
    }
}