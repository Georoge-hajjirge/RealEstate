import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { createPropertyReducer } from "../features/createproperty";
import favoritesReducer from "../features/favorites/favoritesSlice";
import { propertyListingReducer } from "../features/Listproperty/propertyListingSlice";


export const store=configureStore({
    reducer:{
        auth:authReducer,
        createProperty: createPropertyReducer,
        favorites: favoritesReducer,
        propertyListing: propertyListingReducer,
    }
});

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch;