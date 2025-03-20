import { Request, Response } from "express";
import { failResponse, successResponse } from "../utils/response";
import { Messages } from "../utils/constants";
import { StatusCode } from "../utils/statusCode";
import FavoriteModel from "../schema/favoriteSchema";


const addToFavorites=async(req:Request,res:Response):Promise<void>=>{
    const {user_id,property_id,}=req.body;

    if(!user_id || !property_id){
        failResponse(res,Messages.Missing_Fields_Required,StatusCode.Bad_Request);
        return;
    }
    try{
        const newFavorite= new FavoriteModel({
            user_id,
            property_id
        });
        const favorite=await newFavorite.save();
        successResponse(res,favorite,Messages.Favorite_Adding,StatusCode.Created);
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
        const favorites= await FavoriteModel.find({user_id}).populate('property_id');
        successResponse(res,favorites,Messages.Favorite_Fetching_Success,StatusCode.OK);
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
        const removedFavorite=await FavoriteModel.findOneAndDelete ({user_id: user_id, 
            property_id: property_id });
        if(removedFavorite){
            successResponse(res,removedFavorite,Messages.Favorite_Removing_Success,StatusCode.OK)
        }
        else{
            failResponse(res,Messages.Favorite_Not_Found,StatusCode.Not_Found)
        }
    }
    catch(error){
        console.error(error);
        failResponse(res,Messages.Favorite_Removing_Failure,StatusCode.Internal_Server_Error)
    }
}
export {addToFavorites,getFavoritesByUser,removeFromFavorites};