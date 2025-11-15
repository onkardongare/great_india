// skillSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from "@/api/api";

const initialState = {
  skills: [],
  selectedSkill: null,
  loading: false,
  error: null,
};

// Create a new skill (Admin)
export const createSkill = createAsyncThunk(
  'skill/createSkill',
  async (data, { rejectWithValue }) => {
    try {
      const res = await apiClient.post('/skill/create', data);
      return res.data?.skill || res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to create skill');
    }
  }
);

// Get all skills (with optional filters via body)
export const fetchSkills = createAsyncThunk(
  'skill/fetchSkills',
  async (filters = {}, { rejectWithValue }) => {
    try {
      const res = await apiClient.post('/skill/getAll', filters);
      return res.data?.skills || [];
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch skills');
    }
  }
);

// Get a single skill by ID
export const fetchSkillById = createAsyncThunk(
  'skill/fetchSkillById',
  async (id, { rejectWithValue }) => {
    try {
      const res = await apiClient.get(`/skill/getById/${id}`);
      return res.data?.skill || res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch skill');
    }
  }
);

// Update a skill (Admin)
export const updateSkillById = createAsyncThunk(
  'skill/updateSkillById',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await apiClient.put(`/skill/updateById/${id}`, data);
      return res.data?.skill || res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to update skill');
    }
  }
);

// Delete a skill (Admin)
export const deleteSkillById = createAsyncThunk(
  'skill/deleteSkillById',
  async (id, { rejectWithValue }) => {
    try {
      await apiClient.delete(`/skill/deleteById/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to delete skill');
    }
  }
);

const skillSlice = createSlice({
  name: 'skill',
  initialState,
  reducers: {
    clearSelectedSkill: (state) => {
      state.selectedSkill = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch all
    builder
      .addCase(fetchSkills.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.loading = false;
        state.skills = action.payload;
      })
      .addCase(fetchSkills.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Fetch by id
    builder
      .addCase(fetchSkillById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSkillById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedSkill = action.payload;
      })
      .addCase(fetchSkillById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Create
    builder
      .addCase(createSkill.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSkill.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.skills.push(action.payload);
        }
      })
      .addCase(createSkill.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Update
    builder
      .addCase(updateSkillById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSkillById.fulfilled, (state, action) => {
        state.loading = false;
        const updated = action.payload;
        const idx = state.skills.findIndex(s => s.id === updated?.id || s._id === updated?._id);
        if (idx !== -1) {
          state.skills[idx] = updated;
        }
        if (state.selectedSkill && (state.selectedSkill.id === updated?.id || state.selectedSkill._id === updated?._id)) {
          state.selectedSkill = updated;
        }
      })
      .addCase(updateSkillById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Delete
    builder
      .addCase(deleteSkillById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteSkillById.fulfilled, (state, action) => {
        state.loading = false;
        const id = action.payload;
        state.skills = state.skills.filter(s => (s.id || s._id) !== id);
        if (state.selectedSkill && ((state.selectedSkill.id || state.selectedSkill._id) === id)) {
          state.selectedSkill = null;
        }
      })
      .addCase(deleteSkillById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSelectedSkill } = skillSlice.actions;
export default skillSlice.reducer;


