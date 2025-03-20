import { UserPayload} from "./userInterface";
import { Request } from "express";
declare global{
    namespace Express{
        interface Request{
            user?:UserPayload;
        }
    }
}