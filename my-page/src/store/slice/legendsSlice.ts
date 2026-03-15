import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import type {ILegend} from '../../types'

interface LegendsState {
  legends: ILegend[];
  loading: boolean;
  error: string | null;
}

const initialState:LegendsState = {
  legends: [],
  loading: false,
  error: null
}

export const fetchLegends = createAsyncThunk<ILegend[]>(
  'legends/fetchLegends',
  async () => {
    const response = await axios.get('http://localhost:5000/api/legend')
    return response.data
  }
)

const legendsSlice = createSlice({
  name: 'legends',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLegends.pending, (state)=>{
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLegends.fulfilled, (state, action: PayloadAction<ILegend[]>)=>{
        state.loading = false;
        state.legends = action.payload
      })
      .addCase(fetchLegends.rejected, (state, action)=>{
        state.loading = false;
        state.error = action.error?.message || 'Что-то пошло не так';
      })
  }
})

export const legendsReducer = legendsSlice.reducer