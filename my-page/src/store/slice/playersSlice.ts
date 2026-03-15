import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { IPlayer } from '../../types';

interface PlayersState {
  players: IPlayer[];
  loading: boolean;
  error: string | null
}

const initialState: PlayersState = {
  players: [],
  loading: false,
  error: null,
};

export const fetchPlayers = createAsyncThunk<IPlayer[]>(
  'players/fetchPlayers',
  async () => {
    const response = await axios.get('http://localhost:5000/api/player');
    return response.data 
  }
)

const playersSlice = createSlice({
  name:'news',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlayers.fulfilled, (state, action: PayloadAction<IPlayer[]>) => {
        state.loading = false;
        state.players = action.payload;   
      })
      .addCase(fetchPlayers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Что-то пошло не так';
      })
  },

})

export const playersReducer = playersSlice.reducer 