// userSkillSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from "@/api/api";

const initialState = {
  userSkills: [],
  selectedUserSkill: null,
  recommendations: [],
  loading: false,
  error: null,
};

// Create user skill
export const createUserSkill = createAsyncThunk(
  'userSkill/createUserSkill',
  async (data, { rejectWithValue }) => {
    try {
      const res = await apiClient.post('/user-skill/createUserSkill', data);
      return res.data?.userSkill || res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to create user skill');
    }
  }
);

// Get current user's skills
export const fetchUserSkills = createAsyncThunk(
  'userSkill/fetchUserSkills',
  async (_, { rejectWithValue }) => {
    try {
      const res = await apiClient.get('/user-skill/getUserSkills');
      return res.data?.userSkills || [];
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch user skills');
    }
  }
);

// Get a single user skill by id
export const fetchUserSkillById = createAsyncThunk(
  'userSkill/fetchUserSkillById',
  async (id, { rejectWithValue }) => {
    try {
      const res = await apiClient.get(`/user-skill/getUserSkillById/${id}`);
      return res.data?.userSkill || res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch user skill');
    }
  }
);

// Update a user skill (level/points/progress)
export const updateUserSkill = createAsyncThunk(
  'userSkill/updateUserSkill',
  async (data, { rejectWithValue }) => {
    try {
      const res = await apiClient.put('/user-skill/updateUserSkill', data);
      return res.data?.userSkill || res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to update user skill');
    }
  }
);

// Add action to a user skill
export const addUserSkillAction = createAsyncThunk(
  'userSkill/addUserSkillAction',
  async (data, { rejectWithValue }) => {
    try {
      const res = await apiClient.put('/user-skill/addUserSkillAction', data);
      return res.data?.userSkill || res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to add action to user skill');
    }
  }
);

// Get recommendations for the current user
export const fetchSkillRecommendations = createAsyncThunk(
  'userSkill/fetchRecommendations',
  async (_, { rejectWithValue }) => {
    try {
      const res = await apiClient.get('/user-skill/recommendations');
      return res.data?.recommendedSkills || [];
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch recommendations');
    }
  }
);

const userSkillSlice = createSlice({
  name: 'userSkill',
  initialState,
  reducers: {
    clearSelectedUserSkill: (state) => {
      state.selectedUserSkill = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch user skills
    builder
      .addCase(fetchUserSkills.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserSkills.fulfilled, (state, action) => {
        state.loading = false;
        state.userSkills = action.payload;
      })
      .addCase(fetchUserSkills.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Fetch by id
    builder
      .addCase(fetchUserSkillById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserSkillById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedUserSkill = action.payload;
      })
      .addCase(fetchUserSkillById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Create
    builder
      .addCase(createUserSkill.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUserSkill.fulfilled, (state, action) => {
        state.loading = false;
        const created = action.payload;
        const exists = state.userSkills.some(us => (us.id || us._id) === (created?.id || created?._id));
        if (!exists && created) state.userSkills.push(created);
      })
      .addCase(createUserSkill.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Update
    builder
      .addCase(updateUserSkill.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserSkill.fulfilled, (state, action) => {
        state.loading = false;
        const updated = action.payload;
        const idx = state.userSkills.findIndex(us => (us.id || us._id) === (updated?.id || updated?._id));
        if (idx !== -1) state.userSkills[idx] = updated;
        if (state.selectedUserSkill && ((state.selectedUserSkill.id || state.selectedUserSkill._id) === (updated?.id || updated?._id))) {
          state.selectedUserSkill = updated;
        }
      })
      .addCase(updateUserSkill.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Add action
    builder
      .addCase(addUserSkillAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUserSkillAction.fulfilled, (state, action) => {
        state.loading = false;
        const updated = action.payload;
        const idx = state.userSkills.findIndex(us => (us.id || us._id) === (updated?.id || updated?._id));
        if (idx !== -1) state.userSkills[idx] = updated;
        if (state.selectedUserSkill && ((state.selectedUserSkill.id || state.selectedUserSkill._id) === (updated?.id || updated?._id))) {
          state.selectedUserSkill = updated;
        }
      })
      .addCase(addUserSkillAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Recommendations
    builder
      .addCase(fetchSkillRecommendations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSkillRecommendations.fulfilled, (state, action) => {
        state.loading = false;
        state.recommendations = action.payload;
      })
      .addCase(fetchSkillRecommendations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSelectedUserSkill } = userSkillSlice.actions;
export default userSkillSlice.reducer;


