import { configureStore } from '@reduxjs/toolkit';
import { quotesApi } from '../services/quotesApi';

export const store = configureStore({
  reducer: {
    [quotesApi.reducerPath]: quotesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(quotesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;