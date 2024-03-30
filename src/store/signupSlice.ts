// src/store/signupSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";
import axios from "axios";

interface SignupState {
  loading: boolean;
  error: string | null;
  user: IUser | null; // Define a more specific type according to your needs.
}

interface IUser {
  user_type: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
}

const initialState: SignupState = {
  loading: false,
  error: null,
  user: null,
};

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    signupStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signupSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    signupFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { signupStart, signupSuccess, signupFailure } =
  signupSlice.actions;

export const signupUser =
  (userData: {
    user_type: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
  }) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(signupStart());
      const response = await axios.post(
        "https://django.aakscience.com/signup/",
        userData
      );
      dispatch(signupSuccess(response.data));
    } catch (error: any) {
      dispatch(signupFailure(error.message));
    }
  };

export default signupSlice.reducer;
