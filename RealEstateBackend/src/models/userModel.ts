import { UserPayload } from "../interfaces/userInterface";
import UserModel from "../schema/userSchema";

const createUser = async (userData: UserPayload): Promise<any> => {
    try {
        const user = new UserModel(userData);
        const result = await user.save();
        return result;
    }
    catch (error) {
        throw error;
    }

}

const getUserByEmail = async (email: string): Promise<any> => {
    try {
        const user = await UserModel.findOne({ email })
        return user;
    }
    catch (error) {
        throw error;
    }

}
export { createUser, getUserByEmail };