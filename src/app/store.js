import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/userSlice.js"
import authReducer from "../app/features/autorSlice.js";


export const store = configureStore({
  reducer: {
    user: counterReducer,
    auth: authReducer,
  },
});
