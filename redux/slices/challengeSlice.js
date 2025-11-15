// challengeSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from "@/api/api";

const initialState = {
  currentChallenge: null,
  currentChallenges: [],
  recommendedChallenges: [],
  challengesHistory: [],
  challenges: [],
  message: null,
  loading: false,
  error: null,
};

// ----------- Async Thunks ------------

// User: Select a challenge
export const selectUserChallenge = createAsyncThunk(
  'challenge/selectChallenge',
  async (data, { rejectWithValue }) => {
    try {
      const res = await apiClient.post('/user-challenge/create', data);
      return res.data || null; // userChallenge object from backend
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to select challenge');
    }
  }
);
export const fetchUserChallenges = createAsyncThunk(
  'challenge/fetchUserChallenges',
  async (_, { rejectWithValue }) => {
    try {
      const res = await apiClient.get('/user-challenge/getAllUserChallenges');
      const {data} = res.data;
      console.log("data",data)
      return data || [];
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch challenges');
    }
  }
);

// All users: Get all challenges
export const fetchChallenges = createAsyncThunk(
  'challenge/fetchChallenges',
  async (_, { rejectWithValue }) => {
    try {
      const res = await apiClient.get('/user-challenge/getAllChallenges');
      console.log(res.data)
      return { challenges: res.data.challenges || [] };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch challenges');
    }
  }
);

// Admin: Create a challenge
export const createChallenge = createAsyncThunk(
  'challenge/createChallenge',
  async (data, { rejectWithValue }) => {
    try {
      const res = await apiClient.post('/challenge/create', data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to create challenge');
    }
  }
);

// Admin: Update a challenge
export const updateChallenge = createAsyncThunk(
  'challenge/updateChallenge',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await apiClient.put(`/challenge/update/${id}`, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to update challenge');
    }
  }
);

// Admin: Delete a challenge
export const deleteChallenge = createAsyncThunk(
  'challenge/deleteChallenge',
  async (id, { rejectWithValue }) => {
    try {
      await apiClient.delete(`/challenge/delete/${id}`);
      return id; // return deleted challenge id
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to delete challenge');
    }
  }
);

// ----------- Slice ------------
const challengeSlice = createSlice({
  name: 'challenge',
  initialState,
  reducers: {
    clearChallenge: (state) => {
      state.currentChallenge = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {

    // Select challenge
    builder
      .addCase(selectUserChallenge.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(selectUserChallenge.fulfilled, (state, action) => {
        state.loading = false;
        state.currentChallenge = action.payload.userChallenge;
        // Add the challenge to userChallenges if it's not already there
        if (action.payload.userChallenge && !state.currentChallenges.some(uc => uc.id === action.payload.userChallenge.id)) {
          state.currentChallenges.push(action.payload.userChallenge);
        }
      })
      .addCase(selectUserChallenge.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Fetch user challenges
    builder
      .addCase(fetchUserChallenges.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserChallenges.fulfilled, (state, action) => {
        state.loading = false;
        state.currentChallenges = action.payload.currentChallenges;
        state.recommendedChallenges = action.payload.recommendedChallenges;
        state.challengesHistory = action.payload.challengesHistory;
      })
      .addCase(fetchUserChallenges.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Fetch all challenges
    builder
      .addCase(fetchChallenges.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChallenges.fulfilled, (state, action) => {
        state.loading = false;
        console.log("chalenges", action.payload.challenges)
        state.challenges = action.payload.challenges;
      })
      .addCase(fetchChallenges.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Create challenge
    builder
      .addCase(createChallenge.fulfilled, (state, action) => {
        state.challenges.push(action.payload);
      });

    // Update challenge
    builder
      .addCase(updateChallenge.fulfilled, (state, action) => {
        const idx = state.challenges.findIndex(c => c.id === action.payload.id);
        if (idx !== -1) state.challenges[idx] = action.payload;
      });

    // Delete challenge
    builder
      .addCase(deleteChallenge.fulfilled, (state, action) => {
        state.challenges = state.challenges.filter(c => c.id !== action.payload);
      });
  },
});

export const { clearChallenge } = challengeSlice.actions;
export default challengeSlice.reducer;
