import { RootState } from "../../app/store";

export const selectProperties = (state: RootState) => state.propertyListing.properties;
export const selectPropertyError = (state: RootState) => state.propertyListing.error;
