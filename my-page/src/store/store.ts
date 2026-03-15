import { configureStore } from "@reduxjs/toolkit";

import { matchesReducer } from "./slice/matchesSlice";
import { newsReducer } from "./slice/newsSlice";
import { playersReducer } from "./slice/playersSlice";
import { historiesReducer } from "./slice/historySlice";
import { legendsReducer } from "./slice/legendsSlice";
import { itemsReducer } from "./slice/itemSlice";
import { cartReducer } from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    matches: matchesReducer,
    news: newsReducer,
    players: playersReducer,
    histories: historiesReducer,
    legends: legendsReducer,
    items: itemsReducer,
    cart: cartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
