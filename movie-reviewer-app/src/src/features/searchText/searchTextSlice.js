import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "",
};

export const searchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    setSearchInput: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchInput } = searchTextSlice.actions;

export default searchTextSlice.reducer;


