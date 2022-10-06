import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import countriesReducer from './Home/home';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger()),
});

export default store;
