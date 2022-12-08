import { configureStore } from '@reduxjs/toolkit';
import { personDataSlice } from './personDataSlice';

export const store = configureStore({
    reducer: {
      clicks: clickSlice.reducer
  },
});
