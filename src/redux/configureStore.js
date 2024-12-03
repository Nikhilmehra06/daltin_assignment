// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../redux/feature/api/api.slice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // Add API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Add API middleware
});