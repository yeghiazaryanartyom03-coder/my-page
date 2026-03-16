import {createSlice, createAsyncThunk, type PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios'
import type {IHistory} from '../../types'

interface HistoriesState {
  histories: IHistory[];
  loading: boolean;
  error: string | null
}

const initialState: HistoriesState = {
  histories: [],
  loading: false,
  error: null
} 

export const fetchHistories = createAsyncThunk<IHistory[]>(
  'histories/fetchHistories',
  async () => {
    const response = await axios.get('http://localhost:5000/api/history')
    return response.data
  }
)

const historiesSlice = createSlice({
  name: 'histories',
  initialState,
  reducers:{

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHistories.fulfilled, (state, action: PayloadAction<IHistory[]>) => {
        state.loading = false;
        state.histories = action.payload;
      })
      .addCase(fetchHistories.rejected, (state,action) => {
        state.loading = false;
        state.error = action.error.message || 'Что-то пошло не так';
      })
  }
})

export const historiesReducer = historiesSlice.reducer