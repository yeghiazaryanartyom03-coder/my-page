import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { IItem } from '../../types';


interface ItemsState {
  items: IItem[];
  loading: boolean;
  error: string | null
}

const initialState: ItemsState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchItems = createAsyncThunk<IItem[]>(
  'items/fetchItems',
  async () => {
    const response = await axios.get('http://localhost:5000/api/items');
    return response.data 
  }
)

const ItemsSlice = createSlice({
  name:'item',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItems.fulfilled, (state, action: PayloadAction<IItem[]>) => {
        state.loading = false;
        state.items = action.payload;   
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Что-то пошло не так';
      })
  },

})

export const itemsReducer = ItemsSlice.reducer 