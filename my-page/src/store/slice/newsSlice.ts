import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { INews } from '../../types';


interface NewsState {
  news: INews[];
  loading: boolean;
  error: string | null
}

const initialState: NewsState = {
  news: [],
  loading: false,
  error: null,
};

export const fetchNews = createAsyncThunk<INews[]>(
  'news/fetchNews',
  async () => {
    const response = await axios.get('http://localhost:5000/api/news');
    return response.data 
  }
)

const newsSlice = createSlice({
  name:'news',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action: PayloadAction<INews[]>) => {
        state.loading = false;
        state.news = action.payload;   
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Что-то пошло не так';
      })
  },

})

export const newsReducer = newsSlice.reducer 