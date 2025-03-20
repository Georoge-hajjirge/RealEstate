import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './src/config/db';
import authRoute from './src/routes/authRoute'

dotenv.config();

const app = express();

connectDB();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true })); 
app.use(cors());

app.use('/uploads', express.static('uploads'));
app.use('/api/auth', authRoute)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})