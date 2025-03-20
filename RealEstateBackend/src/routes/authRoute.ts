// routes.ts
import express from 'express';
import { loginUser, registerUser } from '../controller/userController';
import { getUserProfile,updateUserProfile } from '../controller/userProfileUpdate';
import authenticate from '../middleware/authMiddleware';
import { createProperty,  getAllProperties,  upload } from '../controller/propertyController';
import { addToFavorites, getFavoritesByUser, removeFromFavorites } from '../controller/favoriteController';

const router = express.Router();

router.post('/register', upload.single('profilePicture'), registerUser);
router.post('/login', loginUser);

router.get('/profile/:id', authenticate,getUserProfile);
router.put('/profile/:id', upload.single('profilePicture'),authenticate, updateUserProfile);

router.post('/property',authenticate,upload.array('images') ,createProperty);
router.get('/properties',getAllProperties);


router.post('/favorite',addToFavorites);
router.get('/favorites/:user_id',getFavoritesByUser);

router.delete('/favorite', removeFromFavorites);


export default router;
