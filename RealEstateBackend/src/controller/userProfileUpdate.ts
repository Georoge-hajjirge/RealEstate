import {  Response } from "express";
import UserModel from "../schema/userSchema";
import { failResponse, successResponse } from "../utils/response";
import { Messages } from "../utils/constants";
import { StatusCode } from "../utils/statusCode";
import { RequestWithUser } from "../interfaces/userInterface";
import { ObjectId } from "mongodb";


export const getUserProfile=async(req:RequestWithUser,res:Response):Promise<void>=>{
    try{
       const userid= req.params.id;
        const user = await UserModel.findOne({ _id:new ObjectId(userid) });
        if(!user){
             failResponse(res,Messages.User_Not_Available,StatusCode.Not_Found);
             return;
        }
    successResponse(res,user,Messages.User_Data_Fetched,StatusCode.OK)
    }
    catch(error){
        console.error('error',error);
        failResponse(res,Messages.Internal_Server_Error,StatusCode.Internal_Server_Error)
    }
}
export const updateUserProfile = async (req: RequestWithUser, res: Response): Promise<void> => {
    try {
        const userId = req.params.id;
        const updates = req.body;
        console.log('req.file',req.file)
        if (req.file) {
            updates.profilePicture = req.file.path;
        }
        const updatedUser = await UserModel.findOneAndUpdate(
            { _id: new ObjectId(userId) },
            { $set: updates },
            { new: true }
        );

        if (!updatedUser) {
            failResponse(res, Messages.User_Not_Available, StatusCode.Not_Found);
            return;
        }

        successResponse(res, updatedUser, Messages.User_Updated, StatusCode.OK);
    } catch (error) {
        failResponse(res, Messages.Internal_Server_Error, StatusCode.Internal_Server_Error);
    }
};
