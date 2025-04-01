import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './src/config/db';
import authRoute from './src/routes/authRoute'
import { asyncHandler, failResponse } from './src/utils/response';
import { Messages } from './src/utils/constants';
import { StatusCode } from './src/utils/statusCode';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

connectDB();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true })); 
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use('/uploads', express.static('uploads'));
app.use('/api/auth', authRoute);

app.get('/api/files/:bucket/:fileId', asyncHandler(async (req, res) => {
    const { bucket, fileId } = req.params;
    
    if (bucket !== 'profilePictures' && bucket !== 'propertyPictures') {
      failResponse(res, Messages.Invalid_Bucket_Name, StatusCode.Bad_Request);
      return;
    }
  
    const fileBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db!, { 
      bucketName: bucket 
    });
    
    try {
      const downloadStream = fileBucket.openDownloadStream(new mongoose.Types.ObjectId(fileId));
      
      downloadStream.on('error', () => {
        failResponse(res, Messages.Fetch_Error, StatusCode.Not_Found);
      });
  
      // Fix pipe type assertion
      downloadStream.pipe(res as unknown as NodeJS.WritableStream);
      
    } catch (error) {
      failResponse(res, Messages.Fetch_Error, StatusCode.Internal_Server_Error);
    }
  }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})