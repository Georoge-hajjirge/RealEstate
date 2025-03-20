import mongoose, { Document, Schema } from "mongoose";

export enum UserRole{
  Admin='admin',
  Buyer='buyer',
  Seller='seller'
}

interface User extends Document{
    firstName:string,
    lastName:string,
    email:string,
    passwordHash:string,
    phoneNumber:number,
    role:UserRole[],
    profilePicture:string,
    createdAt:Date,
    updatedAt:Date
}

const userSchema :Schema=new Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    passwordHash:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    role:[{
        type:String,
        enum:[UserRole.Admin,UserRole.Buyer,UserRole.Seller],
        default:UserRole.Buyer
    }],
    profilePicture:{type:String,default:''},
},
    {

    timestamps:true

});
const UserModel=mongoose.model<User>('User',userSchema);

export default UserModel;