import { Request, Response } from "express";
import { createUser, getUserByEmail } from "../models/userModel";
import generateToken from "../utils/jwtUtils";
import { failResponse, successResponse } from "../utils/response";
import { Messages } from "../utils/constants";
import { StatusCode } from "../utils/statusCode";
import bcrypt from 'bcryptjs';
import { Status } from "../schema/interface";
import { imagekit } from "../config/ImgageKit";

const registerUser = async (req: Request, res: Response): Promise<any> => {
    const { firstName, lastName, email, password, confirmPassword, role, phoneNumber } = req.body;


    const profilePictures = req.file;
    if (!firstName || !lastName || !email || !password || !confirmPassword || !role || !phoneNumber || !profilePictures) {
        failResponse(res, Messages.Missing_Fields_Required, StatusCode.Bad_Request)
        return;
    }
    try {
        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            failResponse(res, Messages.User_Exists, StatusCode.Bad_Request)
            return;
        }

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);
        const uploadResponse = await imagekit.upload({
            file: profilePictures.buffer,
            fileName: profilePictures?.originalname,
            folder: '/profile_pictures/'
        })
        // const profilePicPath = `/uploads/${profilePicture.filename}`; 
        const newUser = {
            firstName, lastName, email, passwordHash, role, phoneNumber,
            profilePictures: {
                url: uploadResponse.url,
                fileId: uploadResponse.fileId,
                alternateName: profilePictures.originalname
            }
            ,
            status: Status.Active,
            isActive: true,
            version: 1,
            createdBy: req.userId,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        const result = await createUser(newUser);
        const userId = result._id;
        successResponse(res, { userId }, Messages.Register_Sucess, StatusCode.Created)
    }


    catch (error) {
        console.error("Registration Error:", error);
        failResponse(res, Messages.Register_Fail, StatusCode.Internal_Server_Error)
    }

}

const loginUser = async (req: Request, res: Response): Promise<any> => {
    console.log('response', req.body)
    const { email, password } = req.body;
    const user = await getUserByEmail(email);
    if (!user) {
        failResponse(res, Messages.Login_Fail, StatusCode.Bad_Request)
        return;
    }
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
        failResponse(res, Messages.Login_Fail, StatusCode.Bad_Request);
        return;
    }

    const token = generateToken(user._id);
    successResponse(
        res,
        {
            token, userId: user._id, user: {
                firstName: user.firstName,
                profilePictures: user.profilePictures
            }
        },
        Messages.Login_Sucess,
        StatusCode.OK
    );
}

export { registerUser, loginUser };