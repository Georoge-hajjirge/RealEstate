import { RootState } from "../../app/store";

export const selectCreatePropertyData = (state: RootState) =>
  state.createProperty.propertyData;

export const selectCreatePropertySubmitting = (state: RootState) =>
  state.createProperty.isSubmitting;

export const selectCreatePropertyError = (state: RootState) =>
  state.createProperty.error;
