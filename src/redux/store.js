import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlise';
import { personDataSlice } from './personDataSlice';
 

export const store = configureStore({
  reducer: {
    contacts: personDataSlice.reducer,
    filter: filterSlice.reducer,
  },
});
