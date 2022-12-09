import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    createFilter(state, action) {
     return state = action.payload;
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
export const filterReducer = filterSlice.reducer;
