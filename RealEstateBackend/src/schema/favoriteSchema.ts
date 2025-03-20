import mongoose, { Document, Schema } from "mongoose";

interface Favorite extends Document{
  user_id:mongoose.Types.ObjectId,
  property_id:mongoose.Types.ObjectId,
  created_At:Date
}
const favoriteSchema:Schema=new Schema({
    user_id:{type:mongoose.Types.ObjectId,ref:'User',required:true},
    property_id:{type:mongoose.Types.ObjectId,ref:'Property',required:true},
    
},
{
    timestamps:true
});

const FavoriteModel=mongoose.model<Favorite>('Favorite',favoriteSchema);

export default FavoriteModel;