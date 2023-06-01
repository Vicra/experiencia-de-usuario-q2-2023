import { configureStore } from '@reduxjs/toolkit';
import searchTextReducer from '../src/features/searchText/searchTextSlice';

export const store = configureStore({
  reducer: { searchText: searchTextReducer },
});