import { RootState } from "../../app/store";
import { AuthState } from "./authSlice";

export const selectToken = (state: RootState) =>
  (state.auth as AuthState).token;

export const selectUserId = (state: RootState) =>
  (state.auth as AuthState).userId;

