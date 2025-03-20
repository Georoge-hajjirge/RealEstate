import { Request, Response } from "express";
import { Messages } from "../utils/constants";
import { failResponse, successResponse } from "../utils/response";
import { StatusCode } from "../utils/statusCode";
import PropertyModel from "../schema/propertySchema";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

export const upload = multer({ storage });

const createProperty = async (req: Request, res: Response): Promise<void> => {
   
    const { title, description, property_type, price, address, city, state, zip_code, bedrooms, bathrooms, features, status } = req.body;
    const images = req.files;

    if (!title || !description || !property_type || !price || !address || !city ||
        !state || !zip_code || !bedrooms || !bathrooms || !features || !status) {
        failResponse(res, Messages.Missing_Fields_Required, StatusCode.Bad_Request);
        return;
    }

    try {
        const newProperty = new PropertyModel({
            title,
            description,
            property_type,
            price,
            address,
            city,
            state,
            zip_code,
            bedrooms,
            bathrooms,
            features,
            status,
            images:[],
        });

        if (images && Array.isArray(images)) {
            const imageObjects: { url: string, altText: string }[] = [];

            for (const image of images) {
                const imageUrl = path.join('uploads', image.filename);
                const normalizedImageUrl = imageUrl.replace(/\\/g, '/');
                const altText = image.originalname;

                imageObjects.push({ url: normalizedImageUrl, altText: altText });
            }

            newProperty.images = imageObjects;
        }

        const savedProperty = await newProperty.save();

        successResponse(res, savedProperty, Messages.Success, StatusCode.Created);

    } catch (error) {
        console.error(error);
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
