import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    createFilter(state, action) {
      state = action.payload;
    },
    prepare(name) {
      return {
        payload: {
          name,
        },
      };
    },
  },
});
export const { createFilter } = filterSlice.actions;
