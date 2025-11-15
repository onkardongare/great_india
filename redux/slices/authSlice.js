
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/api/api";

// Register user
export const registerUser = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("/auth/register", credentials);
      const { user } = response.data || {};
      return { user };
    } catch (error) {
      const normalizedMessage =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.message ||
        "Registration failed";
      return rejectWithValue(normalizedMessage);
    }
  }
);

// Login user
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      console.log("credentials",credentials)
      const response = await apiClient.post("/auth/login", credentials);
      console.log("response",response.data.user)
      const { user } = response.data || {};
      return { user };
    } catch (error) {
      const normalizedMessage =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.message ||
        "Login failed";
      return rejectWithValue(normalizedMessage);
    }
  }
);

// Update user profile
export const updateUserProfile = createAsyncThunk(
  "auth/updateUser",
  async (profileUpdates, { rejectWithValue }) => {
    try {
      const response = await apiClient.put("/auth/update", profileUpdates);
      const { user } = response.data || {};
      return { user };
    } catch (error) {
      const normalizedMessage =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.message ||
        "Update failed";
      return rejectWithValue(normalizedMessage);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: null,
    loggedIn: false,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.userData = null;
      state.loggedIn = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.loggedIn = true;
        console.log("action.payload",action.payload)
        state.userData = action.payload.user || null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.loggedIn = true;
        state.userData = action.payload.user || null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update profile
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        if (state.userData) {
          state.userData = { ...state.userData, ...action.payload.user };
        } else {
          state.userData = action.payload.user;
        }
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;




// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface User {
//   // Define your user type here based on your needs
//   id: string;
//   name: string;
//   email: string;
//   // Add other user properties
// }

// interface AuthState {
//   user: User | null;
//   token: string | null;
//   isAuthenticated: boolean;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: AuthState = {
//   user: null,
//   token: null,
//   isAuthenticated: false,
//   loading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loginStart: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     loginSuccess: (state, action: PayloadAction<{ user: User; token: string }>) => {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isAuthenticated = true;
//       state.loading = false;
//       state.error = null;
//     },
//     loginFailure: (state, action: PayloadAction<string>) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.isAuthenticated = false;
//       state.loading = false;
//       state.error = null;
//     },
//     clearError: (state) => {
//       state.error = null;
//     },
//   },
// });

// export const { loginStart, loginSuccess, loginFailure, logout, clearError } = authSlice.actions;
// export default authSlice.reducer;
