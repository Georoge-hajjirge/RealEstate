import { Request, Response } from "express";
import { createUser, getUserByEmail } from "../models/userModel";
import generateToken from "../utils/jwtUtils";
import { failResponse, successResponse } from "../utils/response";
import { Messages } from "../utils/constants";
import { StatusCode } from "../utils/statusCode";
import bcrypt from 'bcryptjs';

const registerUser = async (req: Request, res: Response): Promise<any> => {
    const { firstName, lastName, email, password, confirmPassword, role, phoneNumber} = req.body;


      const profilePicture = req.file;
    if (!firstName || !lastName || !email || !password || !confirmPassword || !role || !phoneNumber || !profilePicture) {
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
        const profilePicPath = `/uploads/${profilePicture.filename}`; 
        const newUser = { firstName, lastName, email, passwordHash,role,phoneNumber,profilePicture:profilePicPath };
        
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
    const { email, password } = req.body;
    const user = await getUserByEmail(email);
    if (!user ) {
        failResponse(res, Messages.Login_Fail, StatusCode.Bad_Request)
        return;
    }
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
        failResponse(res, Messages.Login_Fail, StatusCode.Bad_Request);
        return;
    }

    const token = generateToken(user._id);
    successResponse(res, { token, userId: user._id }, Messages.Login_Sucess, StatusCode.OK)
}

export { registerUser, loginUser };