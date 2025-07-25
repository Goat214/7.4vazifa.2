import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      email: "goat52811@gmail.com",
      password: "123123",
    },
  ],
  isAuthenticated: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        state.isAuthenticated = true;
        state.error = "";
      } else {
        state.error = "Email yoki parol noto‘g‘ri";
      }
    },

    logout: (state) => {
      state.isAuthenticated = false;
    },

    clearError: (state) => {
      state.error = "";
    },

    signup: (state, action) => {
      const { email, password } = action.payload;
      const existingUser = state.users.find((u) => u.email === email);

      if (existingUser) {
        state.error = "Bu email allaqachon mavjud";
      } else {
        state.users.push({ email, password });
        state.isAuthenticated = true;
        state.error = "";
      }
    },
  },
});

export const { login, logout, clearError, signup } = authSlice.actions;
export default authSlice.reducer;
