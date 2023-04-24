import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    findContact(state, action) {
      return (state = action.payload);
    },
  },
});

export const { findContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
