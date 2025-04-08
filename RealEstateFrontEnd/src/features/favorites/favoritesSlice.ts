// src/features/favorites/favoritesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PropertyResponse } from "../../types/propertyInterface";

interface FavoritesState {
  favorites: PropertyResponse[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorites(state, action: PayloadAction<PropertyResponse[]>) {
      state.favorites = action.payload;
    },
    clearFavorites(state) {
      state.favorites = [];
    },
  },
});

export const { setFavorites, clearFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
