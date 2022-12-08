import { configureStore } from '@reduxjs/toolkit';
import {clickSlice} from './personDataSlise'
export const store = configureStore({
    reducer: {
      clicks: clickSlice.reducer
  },
});
