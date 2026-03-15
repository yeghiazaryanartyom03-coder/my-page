
import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { IMatch } from '../../types';

interface MatchesState {
  matches: IMatch[];
  loading: boolean;
  error: string | null
}

const initialState: MatchesState = {
  matches: [],
  loading: false,
  error: null,
};

export const fetchMatches = createAsyncThunk<IMatch[]>(
  'matches/fetchMatches',
  async () => {
    const response = await axios.get('http://localhost:5000/api/match');
    return response.data 
  }
)

const matchesSlice = createSlice({
  name:'matches',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMatches.fulfilled, (state, action: PayloadAction<IMatch[]>) => {
        state.loading = false;
        state.matches = action.payload;   
      })
      .addCase(fetchMatches.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Что-то пошло не так';
      })
  },

})

export const matchesReducer = matchesSlice.reducer 