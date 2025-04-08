import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PropertyFormData } from '../../types/propertyInterface';

interface CreatePropertyState {
  propertyData: PropertyFormData | null;
  isSubmitting: boolean;
  error: string | null;
}

const initialState: CreatePropertyState = {
  propertyData: null,
  isSubmitting: false,
  error: null,
};

const createPropertySlice = createSlice({
  name: 'createProperty',
  initialState,
  reducers: {
    createPropertyStart(state) {
      state.isSubmitting = true;
      state.error = null;
    },
    createPropertySuccess(state, action: PayloadAction<PropertyFormData>) {
      state.isSubmitting = false;
      state.propertyData = action.payload;
    },
    createPropertyFailure(state, action: PayloadAction<string>) {
      state.isSubmitting = false;
      state.error = action.payload;
    },
  },
});

export const {
  createPropertyStart,
  createPropertySuccess,
  createPropertyFailure,
} = createPropertySlice.actions;

export default createPropertySlice.reducer;
