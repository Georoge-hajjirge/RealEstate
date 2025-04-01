import { Request, Response } from "express";
import { failResponse, successResponse } from "../utils/response";
import { Messages } from "../utils/constants";
import { StatusCode } from "../utils/statusCode";
import UserModel from "../schema/userSchema";


const addToFavorites=async(req:Request,res:Response):Promise<void>=>{
    const {user_id,property_id,}=req.body;

    if(!user_id || !property_id){
        failResponse(res,Messages.Missing_Fields_Required,StatusCode.Bad_Request);
        return;
    }
    try{
        const user =await UserModel.findById(user_id);
        if(!user){
            failResponse(res,Messages.User_Not_Found,StatusCode.Not_Found);
            return;
        }
        if(user.favoriteProducts.includes(property_id)){
            failResponse(res,Messages.Favorite_Already_Added,StatusCode.Bad_Request);
            return
        }
        user.favoriteProducts.push(property_id);
        await user.save();
        successResponse(res, user.favoriteProducts,Messages.Favorite_Adding,StatusCode.Created);
    }
    catch(error){
        console.error(error);
            failResponse(res,Messages.Favorite_Adding_Failure,StatusCode.Internal_Server_Error)
            return;
        
    }
}

const getFavoritesByUser=async(req:Request,res:Response):Promise<void>=>{
    const {user_id}=req.params;
    try{
        const user= await UserModel.findById(user_id).populate('favoriteProducts');
        if(!user){
            failResponse(res,Messages.User_Not_Found,StatusCode.Not_Found);
            return;
        }
        successResponse(res, user.favoriteProducts,Messages.Favorite_Fetching_Success,StatusCode.OK);
    }
    catch(error){
        console.error(error);
        failResponse(res,Messages.Favorite_Fetching_Failure,StatusCode.Internal_Server_Error);
    }
}

const removeFromFavorites=async(req:Request,res:Response):Promise<void>=>{

    const {user_id,property_id}=req.body;
     
    if(!user_id || !property_id){
        failResponse(res,Messages.Missing_Fields_Required,StatusCode.Bad_Request);
        return;
    }

    try{
        const user = await UserModel.findById(user_id);
        if (!user) {
            failResponse(res, Messages.User_Not_Found, StatusCode.Not_Found);
            return;
        }
        const index = user.favoriteProducts.indexOf(property_id);
        if (index === -1) {
            failResponse(res, Messages.Favorite_Not_Found, StatusCode.Not_Found);
            return;
        }
        user.favoriteProducts.splice(index, 1);
        await user.save();
        successResponse(res, user.favoriteProducts,Messages.Favorite_Removing_Success,StatusCode.OK)
    }
    catch(error){
        console.error(error);
        failResponse(res,Messages.Favorite_Removing_Failure,StatusCode.Internal_Server_Error)
    }
}
export {addToFavorites,getFavoritesByUser,removeFromFavorites};