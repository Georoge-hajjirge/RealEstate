import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
    userId: string | null;
    token: string | null;
    isAuthenticated: boolean;
  }
  
  const initialState: AuthState = {
    userId: null,
    token: null,
    isAuthenticated: false,
  };
  
  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      login: (state, action: PayloadAction<{ token: string; userId: string }>) => {
        state.token = action.payload.token;
        state.userId = action.payload.userId;
        state.isAuthenticated = true;
      },
      logout: (state) => {
        state.token = null;
        state.userId = null;
        state.isAuthenticated = false;
      },
    },
  });
  
  export const { login, logout } = authSlice.actions;
  export default authSlice.reducer;
  
