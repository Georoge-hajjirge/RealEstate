import { NextFunction,  Response } from "express";
import jwt from 'jsonwebtoken';
import { RequestWithUser,  } from "../interfaces/userInterface";
import { failResponse } from "../utils/response";
import { Messages } from "../utils/constants";
import { StatusCode } from "../utils/statusCode";
import { JwtPayload } from "../interfaces/express";

const authenticate=async (req:RequestWithUser,res:Response,next:NextFunction):Promise<any>=>{
    const token=req.header('Authorization')?.replace('Bearer','').trim();
    if(!token){
        failResponse(res,Messages.Not_Authorized_No_Token,StatusCode.Unauthorized);
        return;
    }
    try{
        const decoded =  await jwt.verify(token,process.env.JWT_SECRET as string) as JwtPayload;
       req.userId = decoded.userId;
        next();
    }
    catch(error){
        console.log('error',error)
        failResponse(res,Messages.Invalid_Token,StatusCode.Unauthorized)
    }
}
export default authenticate;