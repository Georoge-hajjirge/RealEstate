import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PropertyResponse } from "../../types/propertyInterface";

interface PropertyListingState {
  properties: PropertyResponse[];
  error: string | null;
}

const initialState: PropertyListingState = {
  properties: [],
  error: null,
};

const propertyListingSlice = createSlice({
  name: "propertyListing",
  initialState,
  reducers: {
    setProperties: (state, action: PayloadAction<PropertyResponse[]>) => {
      state.properties = action.payload;
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      state.properties = state.properties.map(property =>
        property._id === action.payload
          ? { ...property, isFavorite: !property.isFavorite }
          : property
      );
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setProperties, toggleFavorite, setError } = propertyListingSlice.actions;
export const propertyListingReducer = propertyListingSlice.reducer;
