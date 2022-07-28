import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authReducer from './reducers/auth.reducers';

const reducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer,
});
