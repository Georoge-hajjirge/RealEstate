import { Request, Response } from "express";
import { Messages } from "../utils/constants";
import { failResponse, successResponse } from "../utils/response";
import { StatusCode } from "../utils/statusCode";
import PropertyModel from "../schema/propertySchema";
import multer from "multer";
import { imagekit } from "../config/ImgageKit";

const storage = multer.memoryStorage();

export const upload = multer({
    storage: storage,
    limits: { files: 5 }
});
const createProperty = async (req: Request, res: Response): Promise<void> => {
    try {
        const address = typeof req.body.address === "string" ? JSON.parse(req.body.address) : req.body.address;
        const propertyPictures = req.files as Express.Multer.File[];
        console.log('propertyPictures', propertyPictures)
        const location = typeof req.body.location === "string" ? JSON.parse(req.body.location) : req.body.location;

        const {
            title, description, property_type, price, bedrooms, bathrooms, features, status,
        } = req.body;


        if (!title || !description || !property_type || !price || !address || !location || !bedrooms || !bathrooms || !features || !status || !propertyPictures) {
            failResponse(res, Messages.Missing_Fields_Required, StatusCode.Bad_Request);
            return
        }

        const { street, city, state, zipcode, country } = address;
        const { longitude, latitude, locationUrl } = location;
        const uploadResponses = await Promise.all(
            propertyPictures.map(async (file: Express.Multer.File) => { // Add type annotation
                return imagekit.upload({
                    file: file.buffer,
                    fileName: file.originalname,
                    folder: '/property_pictures/'
                });
            })
        );
        

        const newProperty = new PropertyModel({
            title,
            description,
            property_type,
            price,
            address: { street, city, state, zipcode, country },
            location: { longitude, latitude, locationUrl },
            bedrooms,
            bathrooms,
            features,
            status,
            propertyPictures: uploadResponses.map(res => ({
                url: res.url,
                alternateName: res.name 
            })),            version: 1,
            createdBy: req.userId,
            updatedBy: req.userId,
            isActive: true,
        });

        // if (req.files && Array.isArray(req.files)) {
        //     const imageObjects = req.files.map(file => ({
        //         url: `uploads/${file.filename}`,
        //         altText: file.originalname
        //     }));
        //     newProperty.images = imageObjects;
        // }

        const savedProperty = await newProperty.save();
        successResponse(res, savedProperty, Messages.Success, StatusCode.Created);

    } catch (error) {
        console.error('Error creating property:', error);
        failResponse(res, Messages.Property_Creation_Failed, StatusCode.Internal_Server_Error);
    }
};


const getAllProperties = async (req: Request, res: Response): Promise<void> => {
    try {
        const properties = await PropertyModel.find();

        successResponse(res, properties, Messages.Property_Fetching_Success, StatusCode.OK);

    } catch (error) {
        console.error(error);
        failResponse(res, Messages.Property_Fetching_Fail, StatusCode.Internal_Server_Error);
    }
};

export { createProperty, getAllProperties };
