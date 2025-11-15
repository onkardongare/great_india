// src/store/articleSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/api/api";

// Async action: Fetch all articles
export const fetchArticles = createAsyncThunk(
  "articles/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`/article/getArticles`);
      return response.data.data; // backend returns { success, data }
    } catch (error) {
      console.error("Error fetching articles:", error);
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);

// Async action: Fetch single article by ID
export const fetchArticleById = createAsyncThunk(
  "articles/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`/article/getArticleById/${id}`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching article by ID:", error);
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);

// Async action: Create new article
export const createArticle = createAsyncThunk(
  "articles/create",
  async (articleData, { rejectWithValue }) => {
    try {
      const response = await apiClient.post(`/article/createArticle`, articleData);
      return response.data.data;
    } catch (error) {
      console.error("Error creating article:", error);
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);

const articleSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    selectedArticle: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearSelectedArticle: (state) => {
      state.selectedArticle = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all articles
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch article by ID
      .addCase(fetchArticleById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedArticle = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create new article
      .addCase(createArticle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createArticle.fulfilled, (state, action) => {
        state.loading = false;
        state.articles.push(action.payload);
      })
      .addCase(createArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSelectedArticle } = articleSlice.actions;
export default articleSlice.reducer;
