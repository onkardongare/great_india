// src/store/communitySlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/api/api";

// Async action: Fetch community feed
export const fetchCommunityFeed = createAsyncThunk(
  "community/fetchFeed",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`/community/community-feed`);
      return response.data.data; // backend returns { success, data }
    } catch (error) {
      console.error("Error fetching community feed:", error);
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);

// Async action: Fetch top contributors
export const fetchTopContributors = createAsyncThunk(
  "community/fetchTopContributors",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`/community/top-contributors`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching top contributors:", error);
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);

// Async action: Create new community feed post
export const createCommunityFeed = createAsyncThunk(
  "community/createFeed",
  async (feedData, { rejectWithValue }) => {
    try {
      const response = await apiClient.post(`/community/create-community-feed`, feedData);
      return response.data.data;
    } catch (error) {
      console.error("Error creating community feed:", error);
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);

const communitySlice = createSlice({
  name: "community",
  initialState: {
    feed: [],                // all community posts
    topContributors: [],      // top users
    loading: false,
    error: null,
  },
  reducers: {
    clearCommunityFeed: (state) => {
      state.feed = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch feed
      .addCase(fetchCommunityFeed.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCommunityFeed.fulfilled, (state, action) => {
        state.loading = false;
        state.feed = action.payload;
      })
      .addCase(fetchCommunityFeed.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch top contributors
      .addCase(fetchTopContributors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopContributors.fulfilled, (state, action) => {
        state.loading = false;
        state.topContributors = action.payload;
      })
      .addCase(fetchTopContributors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create new feed
      .addCase(createCommunityFeed.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCommunityFeed.fulfilled, (state, action) => {
        state.loading = false;
        state.feed.unshift(action.payload); // add new post at the top
      })
      .addCase(createCommunityFeed.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCommunityFeed } = communitySlice.actions;
export default communitySlice.reducer;
